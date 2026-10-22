/**
 * Utility to parse and format dual-section product descriptions:
 * 1. Short Highlights (displayed at top next to buy box)
 * 2. Detailed Description (displayed in the bottom detailed section)
 */

export const DETAILED_DESC_DELIMITER = '---DETAILED_DESCRIPTION---';

export interface ParsedProductDescription {
  shortSummary: string;
  bulletPoints: string[];
  detailedText: string;
  hasDetailedSection: boolean;
}

export function parseProductDescription(rawText: string = ''): ParsedProductDescription {
  if (!rawText || typeof rawText !== 'string') {
    return { shortSummary: '', bulletPoints: [], detailedText: '', hasDetailedSection: false };
  }

  let shortPart = rawText.trim();
  let detailedPart = '';
  let hasDetailed = false;

  // 1. Check for explicit delimiter
  if (rawText.includes(DETAILED_DESC_DELIMITER)) {
    const parts = rawText.split(DETAILED_DESC_DELIMITER);
    shortPart = (parts[0] || '').trim();
    detailedPart = (parts.slice(1).join(DETAILED_DESC_DELIMITER) || '').trim();
    hasDetailed = Boolean(detailedPart);
  } else {
    // 2. Legacy check: If starts directly with "Detailed Description", strip leading header
    const cleanRaw = rawText.replace(/^Detailed Description\s*\n+/i, '').trim();

    // Split at common detailed section headers
    const splitRegex = /(?:\n\s*|\.\s+)(Key Features & Benefits|Key Features|Frequently Asked Questions|FAQ|Why Choose|Detailed Description|Best Use Cases|Conclusion)/i;
    const match = cleanRaw.match(splitRegex);
    if (match && match.index !== undefined && match.index > 30) {
      shortPart = cleanRaw.substring(0, match.index).trim();
      detailedPart = cleanRaw.substring(match.index).trim();
      hasDetailed = true;
    } else {
      shortPart = cleanRaw;
    }

    // If shortPart has a Quick Info table (tabs), convert rows to bullets
    if (shortPart.includes('\t')) {
      const qLines = shortPart.split('\n').map(l => l.trim()).filter(Boolean);
      const formattedBullets: string[] = [];
      for (const line of qLines) {
        if (/^(Feature\tDetails|Quick Info)/i.test(line)) continue;
        if (line.includes('\t')) {
          const [k, v] = line.split('\t');
          if (k && v) formattedBullets.push(`• ${k.trim()}: ${v.trim()}`);
        } else {
          formattedBullets.push(line);
        }
      }
      if (formattedBullets.length > 0) {
        shortPart = formattedBullets.join('\n');
      }
    }
  }

  // If shortPart is still too long (> 600 characters) and has double newlines, take first paragraph
  if (shortPart.length > 600) {
    const paragraphs = shortPart.split(/\n\s*\n/);
    if (paragraphs.length > 1) {
      detailedPart = paragraphs.slice(1).join('\n\n') + (detailedPart ? '\n\n' + detailedPart : '');
      shortPart = paragraphs[0].trim();
      hasDetailed = true;
    }
  }

  // Extract bullet lines if formatted with emojis or dashes or asterisks
  const lines = shortPart.split('\n').map(l => l.trim()).filter(Boolean);
  const isBulletList = lines.length > 1 && lines.some(l => /^[•\-*📐📦📏🛡️🚚💰⚡✓★]/.test(l));

  return {
    shortSummary: shortPart,
    bulletPoints: isBulletList ? lines : [],
    detailedText: detailedPart,
    hasDetailedSection: hasDetailed
  };
}

export function combineProductDescription(shortDesc: string = '', detailedDesc: string = ''): string {
  const s = (shortDesc || '').trim();
  const d = (detailedDesc || '').trim();
  if (!d) return s;
  if (!s) return d;
  return `${s}\n\n${DETAILED_DESC_DELIMITER}\n\n${d}`;
}
