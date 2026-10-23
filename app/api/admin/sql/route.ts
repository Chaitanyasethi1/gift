import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { supabase as supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const startTime = Date.now();
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized. Admin login required.' }, { status: 401 });
    }

    const body = await req.json();
    const rawQuery = (body.query || '').trim();

    if (!rawQuery) {
      return NextResponse.json({ success: false, error: 'Query cannot be empty.' }, { status: 400 });
    }

    // 1. Direct Table List action
    if (body.action === 'list_tables') {
      const tables = ['products', 'categories', 'orders', 'coupons', 'site_settings'];
      const counts: Record<string, number> = {};

      for (const t of tables) {
        try {
          const { count } = await supabaseAdmin.from(t).select('*', { count: 'exact', head: true });
          counts[t] = count ?? 0;
        } catch {
          counts[t] = 0;
        }
      }

      return NextResponse.json({
        success: true,
        action: 'list_tables',
        tables,
        counts,
        executionTimeMs: Date.now() - startTime
      });
    }

    // 2. Parse basic SQL queries (SELECT, UPDATE, DELETE, INSERT)
    const selectMatch = rawQuery.match(/^SELECT\s+(.+?)\s+FROM\s+([a-zA-Z0-9_]+)(?:\s+WHERE\s+(.+?))?(?:\s+ORDER\s+BY\s+(.+?))?(?:\s+LIMIT\s+(\d+))?;?$/i);

    if (selectMatch) {
      const rawCols = selectMatch[1].trim();
      const tableName = selectMatch[2].trim().toLowerCase();
      const whereClause = selectMatch[3]?.trim();
      const orderByClause = selectMatch[4]?.trim();
      const limitVal = selectMatch[5] ? parseInt(selectMatch[5], 10) : 100;

      const validTables = ['products', 'categories', 'orders', 'coupons', 'site_settings'];
      if (!validTables.includes(tableName)) {
        return NextResponse.json({
          success: false,
          error: `Table "${tableName}" is not allowed or does not exist. Allowed tables: ${validTables.join(', ')}`
        }, { status: 400 });
      }

      let queryBuilder: any = supabaseAdmin.from(tableName);

      // Select columns
      if (rawCols === '*' || rawCols.toLowerCase().includes('count(')) {
        queryBuilder = queryBuilder.select('*');
      } else {
        // clean columns
        const cols = rawCols.split(',').map(c => c.trim().replace(/\s+as\s+.+$/i, '')).join(',');
        queryBuilder = queryBuilder.select(cols || '*');
      }

      // Where filter (basic id / slug / status equality)
      if (whereClause) {
        const eqMatch = whereClause.match(/([a-zA-Z0-9_]+)\s*=\s*['"]?([^'"]+)['"]?/);
        if (eqMatch) {
          queryBuilder = queryBuilder.eq(eqMatch[1], eqMatch[2]);
        }
      }

      // Order by
      if (orderByClause) {
        const isDesc = /desc/i.test(orderByClause);
        const col = orderByClause.replace(/desc|asc/gi, '').trim();
        queryBuilder = queryBuilder.order(col, { ascending: !isDesc });
      }

      // Limit
      queryBuilder = queryBuilder.limit(limitVal);

      const { data, error } = await queryBuilder;

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
      }

      const rows = data || [];
      const columns = rows.length > 0 ? Object.keys(rows[0]) : [];

      return NextResponse.json({
        success: true,
        query: rawQuery,
        tableName,
        rowCount: rows.length,
        columns,
        data: rows,
        executionTimeMs: Date.now() - startTime
      });
    }

    // 3. Fallback: If query is complex or DDL
    return NextResponse.json({
      success: false,
      error: 'Query syntax not recognized for client REST executor. For advanced JOINs, subqueries, DDL (CREATE/ALTER) or stored procedures, please use the direct Supabase SQL Editor link below.',
      isComplex: true,
      supabaseSqlUrl: 'https://supabase.com/dashboard/project/hfkduzluulqkszhlsixa/sql/new'
    }, { status: 400 });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || 'Internal server error executing query'
    }, { status: 500 });
  }
}
