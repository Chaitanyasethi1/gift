import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hfkduzluulqkszhlsixa.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhma2R1emx1dWxxa3N6aGxzaXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwMTY1MzgsImV4cCI6MjEwNjU5MjUzOH0.6cZOt9eT6RyPawIEJDPjoAgfYRl9VIX1e-7PqTVw-PQ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DeductStockItem {
  id?: string;
  productId?: string;
  product_id?: string;
  title?: string;
  name?: string;
  product_name?: string;
  qty?: number;
  quantity?: number;
  piecesPerPack?: number;
  packQty?: number;
  variant_details?: any;
}

/**
 * Extracts product UUID from various item properties
 */
export function extractProductUuid(item: DeductStockItem): string | null {
  const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

  if (item.productId && typeof item.productId === 'string') {
    const match = item.productId.match(uuidRegex);
    if (match) return match[0];
  }
  if (item.product_id && typeof item.product_id === 'string') {
    const match = item.product_id.match(uuidRegex);
    if (match) return match[0];
  }
  if (item.id && typeof item.id === 'string') {
    const match = item.id.match(uuidRegex);
    if (match) return match[0];
  }
  return null;
}

/**
 * Calculates total individual pieces represented by a cart/order item
 */
export function calculateItemPieces(item: DeductStockItem): number {
  const count = Number(item.qty ?? item.quantity ?? 1) || 1;
  
  if (item.piecesPerPack && item.piecesPerPack > 0) {
    return count * Number(item.piecesPerPack);
  }
  if (item.packQty && item.packQty > 0) {
    return count * Number(item.packQty);
  }

  // Check variant_details if available
  if (item.variant_details) {
    let vd: any = item.variant_details;
    if (typeof vd === 'string') {
      try { vd = JSON.parse(vd); } catch {}
    }
    if (vd?.piecesPerPack && Number(vd.piecesPerPack) > 0) {
      return count * Number(vd.piecesPerPack);
    }
    if (vd?.packQty && Number(vd.packQty) > 0) {
      return count * Number(vd.packQty);
    }
  }

  // Check title or id for "Pack of X"
  const title = item.title || item.name || item.product_name || '';
  const packMatch = title.match(/Pack\s+of\s+(\d+)/i) || (item.id ? String(item.id).match(/pack-(\d+)/i) : null);
  if (packMatch && packMatch[1]) {
    const packSize = parseInt(packMatch[1], 10);
    if (!isNaN(packSize) && packSize > 0) {
      return count * packSize;
    }
  }

  return count;
}

/**
 * Automatically decrements stock in Supabase for all ordered items
 */
export async function deductStockForOrder(items: DeductStockItem[]) {
  if (!items || !Array.isArray(items) || items.length === 0) return [];

  const results: { productId: string; deducted: number; previousStock: number; newStock: number }[] = [];

  for (const item of items) {
    const productId = extractProductUuid(item);
    if (!productId) continue;

    const piecesToDeduct = calculateItemPieces(item);
    if (piecesToDeduct <= 0) continue;

    try {
      // Fetch current stock
      const { data: prod, error: fetchErr } = await supabase
        .from('products')
        .select('id, name, stock_quantity, track_stock')
        .eq('id', productId)
        .single();

      if (fetchErr || !prod) {
        console.warn(`[Inventory] Could not fetch product ${productId}:`, fetchErr);
        continue;
      }

      // If stock tracking is enabled (or null which defaults to true)
      if (prod.track_stock !== false) {
        const currentStock = Number(prod.stock_quantity ?? 0);
        const newStock = Math.max(0, currentStock - piecesToDeduct);

        const { error: updateErr } = await supabase
          .from('products')
          .update({
            stock_quantity: newStock,
            updated_at: new Date().toISOString()
          })
          .eq('id', productId);

        if (updateErr) {
          console.error(`[Inventory] Failed to deduct stock for ${prod.name}:`, updateErr);
        } else {
          console.log(`[Inventory] ✓ Deducted ${piecesToDeduct} pcs for "${prod.name}". Stock: ${currentStock} -> ${newStock}`);
          results.push({
            productId,
            deducted: piecesToDeduct,
            previousStock: currentStock,
            newStock
          });
        }
      }
    } catch (e) {
      console.error(`[Inventory] Error processing deduction for item:`, e);
    }
  }

  return results;
}

/**
 * Restores stock if an order is cancelled
 */
export async function restoreStockForOrder(items: DeductStockItem[]) {
  if (!items || !Array.isArray(items) || items.length === 0) return [];

  for (const item of items) {
    const productId = extractProductUuid(item);
    if (!productId) continue;

    const piecesToRestore = calculateItemPieces(item);
    if (piecesToRestore <= 0) continue;

    try {
      const { data: prod } = await supabase
        .from('products')
        .select('id, name, stock_quantity, track_stock')
        .eq('id', productId)
        .single();

      if (prod && prod.track_stock !== false) {
        const currentStock = Number(prod.stock_quantity ?? 0);
        const newStock = currentStock + piecesToRestore;

        await supabase
          .from('products')
          .update({
            stock_quantity: newStock,
            updated_at: new Date().toISOString()
          })
          .eq('id', productId);

        console.log(`[Inventory] Restored ${piecesToRestore} pcs for "${prod.name}". Stock: ${currentStock} -> ${newStock}`);
      }
    } catch (e) {
      console.error(`[Inventory] Error restoring stock:`, e);
    }
  }
}
