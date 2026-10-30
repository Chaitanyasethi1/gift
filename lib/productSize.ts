export interface ExtractedProductSize {
  raw: string;
  label: string;
  nums: number[];
  type: '3d' | '2d' | '1d';
}

/**
 * Extracts and normalizes dimensions/sizes from product metadata or name.
 * Supports:
 * - 3D Box Dimensions: "4 x 2.5 x 1.5", "14 x 13 x 2.5"
 * - 2D Bag/Pouch/Label Dimensions: "6 x 8", "10 x 14", "4 x 6"
 * - 1D Tape Width / Roll Dimensions: "2 Inch", "3 Inch", "15 Inch"
 */
export function parseAndCleanSize(p: any): ExtractedProductSize | null {
  if (!p) return null;
  const text = `${p.dimensions || ''} ${p.sizes || ''} ${p.name || ''} ${p.title || ''}`;

  // 1. Check for 3D dimensions e.g. 14" × 13" × 2.5" or 14x13x2.5 or 4.5 x 3 x 1
  const m3d = text.match(/(?:^|[^\d.m])(\d+(?:\.\d+)?)\s*["″]?\s*[xX*×]\s*(\d+(?:\.\d+)?)\s*["″]?\s*[xX*×]\s*(\d+(?:\.\d+)?)(?!\s*m\b)/i);
  if (m3d) {
    const l = parseFloat(m3d[1]);
    const w = parseFloat(m3d[2]);
    const h = parseFloat(m3d[3]);
    if (l > 0 && w > 0 && h > 0 && l < 100 && w < 100 && h < 100) {
      return {
        raw: `${l} x ${w} x ${h}`,
        label: `${l} x ${w} x ${h}`,
        type: '3d',
        nums: [l, w, h]
      };
    }
  }

  // 2. Check for Tape Widths (e.g. 2 Inch, 3-Inch, 2" Inch)
  const isTapeOrRoll = /tape|bopp/i.test(text);
  const mTape = text.match(/(\d+(?:\.\d+)?)\s*(?:["″]\s*)?(?:Inch|-Inch)\s*(?:\([^\)]*mm\)|Width)?/i);
  if (isTapeOrRoll && mTape) {
    const v = parseFloat(mTape[1]);
    return {
      raw: `${v} Inch`,
      label: `${v} Inch Width`,
      type: '1d',
      nums: [v]
    };
  }

  // 3. Check for 2D dimensions (Bags, Pouches, Labels) e.g. 10" × 14", 6x8, 4x6
  const m2d = text.match(/(?:^|[^\d.m])(\d+(?:\.\d+)?)\s*["″]?\s*(?:inch)?\s*[xX*×]\s*(\d+(?:\.\d+)?)\s*["″]?\s*(?:inch)?(?!\s*m\b)/i);
  if (m2d) {
    const l = parseFloat(m2d[1]);
    const w = parseFloat(m2d[2]);
    if (l > 0 && w > 0 && l < 100 && w < 100) {
      return {
        raw: `${l} x ${w}`,
        label: `${l} x ${w}`,
        type: '2d',
        nums: [l, w]
      };
    }
  }

  // 4. Fallback single dimension for other products
  if (mTape) {
    const v = parseFloat(mTape[1]);
    return {
      raw: `${v} Inch`,
      label: `${v} Inch`,
      type: '1d',
      nums: [v]
    };
  }

  return null;
}

/**
 * Sorts sizes numerically by Length, Width, Height.
 */
export function sortSizes(sizes: ExtractedProductSize[]): ExtractedProductSize[] {
  return [...sizes].sort((a, b) => {
    const na = a.nums || [];
    const nb = b.nums || [];
    for (let i = 0; i < Math.max(na.length, nb.length); i++) {
      const va = na[i] ?? 0;
      const vb = nb[i] ?? 0;
      if (va !== vb) return va - vb;
    }
    return a.raw.localeCompare(b.raw);
  });
}

/**
 * Returns dynamic contextual label for the size filter based on category.
 */
export function getCategorySizeLabel(categoryName?: string, categorySlug?: string): string {
  const cat = `${categoryName || ''} ${categorySlug || ''}`.toLowerCase();
  if (cat.includes('bag') || cat.includes('polybag') || cat.includes('mailer')) {
    return 'Bag Size';
  }
  if (cat.includes('pouch')) {
    return 'Pouch Size';
  }
  if (cat.includes('tape')) {
    return 'Tape Width';
  }
  if (cat.includes('label') || cat.includes('barcode')) {
    return 'Label Size';
  }
  if (cat.includes('container')) {
    return 'Container Size';
  }
  // Default for corrugated boxes, cartons, flap boxes, gift boxes
  return 'Box Size';
}
