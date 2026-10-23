'use client';

import React, { useState, useEffect } from 'react';

const PRESET_QUERIES = [
  {
    label: '📦 Products & Descriptions',
    query: 'SELECT * FROM products ORDER BY created_at DESC LIMIT 50;'
  },
  {
    label: '📝 Check Descriptions Length',
    query: 'SELECT id, name, slug, length(description) FROM products ORDER BY created_at DESC;'
  },
  {
    label: '🗂️ Categories Table',
    query: 'SELECT * FROM categories ORDER BY name ASC;'
  },
  {
    label: '💰 Recent Orders',
    query: 'SELECT * FROM orders ORDER BY created_at DESC LIMIT 20;'
  },
  {
    label: '🏷️ Active Coupons',
    query: 'SELECT * FROM coupons;'
  },
  {
    label: '⚙️ Site Settings',
    query: 'SELECT * FROM site_settings;'
  }
];

export default function SqlEditorPage() {
  const [query, setQuery] = useState(PRESET_QUERIES[0].query);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any[] | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [stats, setStats] = useState<{ rowCount: number; timeMs: number } | null>(null);
  const [tableCounts, setTableCounts] = useState<Record<string, number>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'json'>('table');

  const supabaseUrl = 'https://supabase.com/dashboard/project/hfkduzluulqkszhlsixa/sql/new';
  const tableEditorUrl = 'https://supabase.com/dashboard/project/hfkduzluulqkszhlsixa/editor';

  useEffect(() => {
    fetchTableCounts();
    runQuery(PRESET_QUERIES[0].query);
  }, []);

  async function fetchTableCounts() {
    try {
      const res = await fetch('/api/admin/sql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'list_tables', query: 'SHOW TABLES' })
      });
      const data = await res.json();
      if (data.success && data.counts) {
        setTableCounts(data.counts);
      }
    } catch (e) {
      console.warn('Failed to load table counts:', e);
    }
  }

  async function runQuery(sqlToRun?: string) {
    const q = (sqlToRun ?? query).trim();
    if (!q) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/sql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q })
      });
      const data = await res.json();

      if (!data.success) {
        setError(data.error || 'Failed to execute query');
        setResults(null);
        setColumns([]);
        setStats(null);
      } else {
        setResults(data.data || []);
        setColumns(data.columns || []);
        setStats({
          rowCount: data.rowCount ?? 0,
          timeMs: data.executionTimeMs ?? 0
        });
      }
    } catch (err: any) {
      setError(err.message || 'Network error running query');
      setResults(null);
    } finally {
      setLoading(false);
    }
  }

  // Filter rows by search term
  const filteredRows = React.useMemo(() => {
    if (!results) return [];
    if (!searchTerm.trim()) return results;
    const term = searchTerm.toLowerCase();
    return results.filter(row =>
      Object.values(row).some(val =>
        String(val ?? '').toLowerCase().includes(term)
      )
    );
  }, [results, searchTerm]);

  return (
    <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* 1. Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.6rem' }}>⚡</span>
            <h1 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>
              Database Console &amp; SQL Query Editor
            </h1>
          </div>
          <p style={{ margin: '4px 0 0 0', color: '#64748B', fontSize: '0.88rem' }}>
            Run live SQL queries, inspect table records, check detailed descriptions, and debug your database.
          </p>
        </div>

        {/* Direct Supabase Dashboard Links */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            href={tableEditorUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#F1F5F9',
              color: '#334155',
              border: '1px solid #CBD5E1',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            📊 Supabase Table Editor ↗
          </a>
          <a
            href={supabaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#047857',
              color: '#FFFFFF',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 6px rgba(4, 120, 87, 0.25)'
            }}
          >
            ⚡ Supabase SQL Editor ↗
          </a>
        </div>
      </div>

      {/* 2. Table Count Badges */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', background: '#FFFFFF', padding: '12px 18px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748B' }}>Live Database Tables:</span>
        {Object.entries(tableCounts).map(([table, count]) => (
          <button
            key={table}
            type="button"
            onClick={() => {
              const newQ = `SELECT * FROM ${table} LIMIT 50;`;
              setQuery(newQ);
              runQuery(newQ);
            }}
            style={{
              background: '#F8FAFC',
              border: '1px solid #CBD5E1',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#1E293B',
              cursor: 'pointer'
            }}
          >
            <strong>{table}</strong>: <span style={{ color: '#2563EB' }}>{count} rows</span>
          </button>
        ))}
      </div>

      {/* 3. SQL Query Editor Card */}
      <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        
        {/* Preset Selector */}
        <div style={{ padding: '12px 16px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>Quick Presets:</span>
          {PRESET_QUERIES.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setQuery(preset.query);
                runQuery(preset.query);
              }}
              style={{
                background: query === preset.query ? '#EFF6FF' : '#FFFFFF',
                border: query === preset.query ? '1.5px solid #3B82F6' : '1px solid #CBD5E1',
                color: query === preset.query ? '#1D4ED8' : '#334155',
                padding: '5px 10px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* SQL Text Area */}
        <div style={{ position: 'relative' }}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={5}
            placeholder="Write SQL query, e.g. SELECT * FROM products WHERE is_active = true ORDER BY created_at DESC;"
            onKeyDown={(e) => {
              if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runQuery();
              }
            }}
            style={{
              width: '100%',
              padding: '16px 20px',
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              fontSize: '0.92rem',
              background: '#0B0F19',
              color: '#38BDF8',
              border: 'none',
              outline: 'none',
              lineHeight: 1.6,
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Action Controls */}
        <div style={{ padding: '12px 18px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
            Shortcut: Press <kbd style={{ background: '#E2E8F0', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>Ctrl + Enter</kbd> to run query.
          </span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setQuery('')}
              style={{
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                padding: '8px 14px',
                borderRadius: '6px',
                fontSize: '0.84rem',
                fontWeight: 600,
                color: '#64748B',
                cursor: 'pointer'
              }}
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => runQuery()}
              disabled={loading}
              style={{
                background: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
              }}
            >
              {loading ? 'Executing...' : '▶ Run Query'}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Results Section */}
      <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        
        {/* Results Header */}
        <div style={{ padding: '14px 20px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>Query Output</h3>
            {stats && (
              <>
                <span style={{ background: '#DCFCE7', color: '#166534', padding: '3px 10px', borderRadius: '14px', fontSize: '0.78rem', fontWeight: 700 }}>
                  ✔ {stats.rowCount} {stats.rowCount === 1 ? 'row' : 'rows'}
                </span>
                <span style={{ background: '#EFF6FF', color: '#1E40AF', padding: '3px 10px', borderRadius: '14px', fontSize: '0.78rem', fontWeight: 600 }}>
                  ⏱ {stats.timeMs}ms
                </span>
              </>
            )}
          </div>

          {/* Search inside results & View Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="text"
              placeholder="Search in results..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '0.82rem',
                outline: 'none'
              }}
            />
            <div style={{ display: 'flex', border: '1px solid #CBD5E1', borderRadius: '6px', overflow: 'hidden' }}>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                style={{
                  background: viewMode === 'table' ? '#0F172A' : '#FFFFFF',
                  color: viewMode === 'table' ? '#FFFFFF' : '#334155',
                  border: 'none',
                  padding: '6px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Table
              </button>
              <button
                type="button"
                onClick={() => setViewMode('json')}
                style={{
                  background: viewMode === 'json' ? '#0F172A' : '#FFFFFF',
                  color: viewMode === 'json' ? '#FFFFFF' : '#334155',
                  border: 'none',
                  padding: '6px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                JSON
              </button>
            </div>
          </div>
        </div>

        {/* Error Notification */}
        {error && (
          <div style={{ padding: '16px 20px', background: '#FEF2F2', borderBottom: '1px solid #FEE2E2', color: '#991B1B', fontSize: '0.88rem' }}>
            <strong>Query Error:</strong> {error}
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div style={{ padding: '60px', textAlign: 'center', color: '#64748B', fontSize: '0.92rem' }}>
            ⚡ Executing query against database...
          </div>
        )}

        {/* Results Grid / Table */}
        {!loading && results && viewMode === 'table' && (
          <div style={{ overflowX: 'auto', maxHeight: '560px' }}>
            {filteredRows.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: '#94A3B8' }}>
                No records found matching query criteria.
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#F1F5F9', position: 'sticky', top: 0, zIndex: 10 }}>
                    <th style={{ padding: '10px 14px', borderBottom: '1.5px solid #CBD5E1', color: '#475569', fontWeight: 800, width: '40px' }}>#</th>
                    {columns.map((col) => (
                      <th
                        key={col}
                        style={{
                          padding: '10px 14px',
                          borderBottom: '1.5px solid #CBD5E1',
                          color: '#1E293B',
                          fontWeight: 800,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid #F1F5F9',
                        background: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA'
                      }}
                    >
                      <td style={{ padding: '8px 14px', color: '#94A3B8', fontWeight: 600 }}>{idx + 1}</td>
                      {columns.map((col) => {
                        const val = row[col];
                        const isDesc = col === 'description';
                        let displayVal = '';
                        if (val === null || val === undefined) displayVal = 'NULL';
                        else if (typeof val === 'object') displayVal = JSON.stringify(val);
                        else displayVal = String(val);

                        return (
                          <td
                            key={col}
                            style={{
                              padding: '8px 14px',
                              color: val === null ? '#94A3B8' : '#0F172A',
                              fontFamily: ['id', 'slug', 'category_id', 'created_at'].includes(col) ? 'monospace' : 'inherit',
                              maxWidth: isDesc ? '350px' : '250px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: isDesc ? 'normal' : 'nowrap'
                            }}
                            title={displayVal}
                          >
                            {isDesc ? (
                              <span style={{ fontSize: '0.78rem', color: '#475569', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {displayVal}
                              </span>
                            ) : (
                              displayVal
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* JSON View */}
        {!loading && results && viewMode === 'json' && (
          <pre style={{ margin: 0, padding: '20px', background: '#0F172A', color: '#E2E8F0', fontSize: '0.82rem', maxHeight: '560px', overflowY: 'auto' }}>
            {JSON.stringify(filteredRows, null, 2)}
          </pre>
        )}
      </div>

    </div>
  );
}
