'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';

export interface AutocompleteInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  defaultSuggestions?: string[];
  storageKey?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  required?: boolean;
}

const DEFAULT_COURIER_LIST = [
  'Blue Dart',
  'Delhivery',
  'DTDC',
  'India Post',
  'Xpressbees',
  'Ecom Express',
  'Trackon',
  'Safexpress',
  'Shadowfax',
  'Professional Couriers'
];

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  value,
  onChange,
  placeholder = 'Type or choose partner...',
  defaultSuggestions = DEFAULT_COURIER_LIST,
  storageKey = 'admin_courier_suggestions',
  style,
  inputStyle,
  required = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [allSuggestions, setAllSuggestions] = useState<string[]>(defaultSuggestions);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load saved suggestions from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const combined = Array.from(new Set([...defaultSuggestions, ...parsed]));
          setAllSuggestions(combined);
          return;
        }
      }
    } catch (err) {
      console.warn('Could not read suggestions from localStorage:', err);
    }
    setAllSuggestions(defaultSuggestions);
  }, [storageKey, defaultSuggestions]);

  // Save new value to localStorage
  const saveNewEntry = (entry: string) => {
    const trimmed = entry.trim();
    if (!trimmed || trimmed.length < 2) return;
    
    // Check if already in list (case-insensitive)
    const exists = allSuggestions.some((s) => s.toLowerCase() === trimmed.toLowerCase());
    if (!exists) {
      const updated = [trimmed, ...allSuggestions];
      setAllSuggestions(updated);
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch (err) {
        console.warn('Could not save suggestions to localStorage:', err);
      }
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        if (value.trim()) {
          saveNewEntry(value);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [value, allSuggestions]);

  // Case-insensitive, partial and abbreviation matching
  const filteredSuggestions = useMemo(() => {
    if (!value || !value.trim()) {
      return allSuggestions;
    }

    const q = value.trim().toLowerCase();

    return allSuggestions.filter((item) => {
      const str = item.toLowerCase();
      // 1. Direct substring match
      if (str.includes(q)) return true;

      // 2. Acronym / Initials match (e.g. "BL" -> "Blue Dart", "IP" -> "India Post", "EE" -> "Ecom Express")
      const words = str.split(/[\s-]+/);
      const initials = words.map((w) => w[0] || '').join('');
      if (initials.includes(q)) return true;

      // 3. Word-starts-with match
      if (words.some((w) => w.startsWith(q))) return true;

      // 4. Subsequence character matching (e.g. "bld" -> "Blue Dart")
      let qIdx = 0;
      for (let i = 0; i < str.length && qIdx < q.length; i++) {
        if (str[i] === q[qIdx]) qIdx++;
      }
      return qIdx === q.length;
    });
  }, [allSuggestions, value]);

  const handleSelect = (item: string) => {
    onChange(item);
    setIsOpen(false);
    saveNewEntry(item);
  };

  const handleBlur = () => {
    if (value.trim()) {
      saveNewEntry(value);
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', ...style }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={value}
          required={required}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '10px 32px 10px 12px',
            borderRadius: '8px',
            border: isOpen ? '1.5px solid #0284c7' : '1.5px solid #cbd5e1',
            boxSizing: 'border-box',
            fontSize: '0.9rem',
            outline: 'none',
            background: '#fff',
            color: '#0f172a',
            transition: 'border-color 0.15s ease',
            ...inputStyle
          }}
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'absolute',
            right: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: '#64748b',
            fontSize: '0.75rem',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.15s ease'
          }}
          aria-label="Toggle suggestions dropdown"
        >
          ▼
        </button>
      </div>

      {isOpen && filteredSuggestions.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            maxHeight: '220px',
            overflowY: 'auto',
            background: '#FFFFFF',
            border: '1.5px solid #cbd5e1',
            borderRadius: '8px',
            boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.15)',
            zIndex: 1000,
            padding: '4px'
          }}
        >
          <div style={{ padding: '4px 8px', fontSize: '0.72rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Suggestions {value.trim() ? `for "${value}"` : ''}
          </div>
          {filteredSuggestions.map((item, idx) => {
            const isExactMatch = item.toLowerCase() === value.trim().toLowerCase();
            return (
              <div
                key={idx}
                onMouseDown={(e) => {
                  e.preventDefault(); // prevents blur before select
                  handleSelect(item);
                }}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.88rem',
                  fontWeight: isExactMatch ? 700 : 500,
                  color: isExactMatch ? '#0284c7' : '#1e293b',
                  background: isExactMatch ? '#f0f9ff' : 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 0.1s ease'
                }}
                className="autocomplete-item-row"
              >
                <span>{item}</span>
                {isExactMatch && <span style={{ fontSize: '0.75rem', color: '#0284c7' }}>✓ selected</span>}
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        .autocomplete-item-row:hover {
          background: #f1f5f9 !important;
          color: #0f172a !important;
        }
      `}</style>
    </div>
  );
};
