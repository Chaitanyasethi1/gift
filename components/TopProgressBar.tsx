'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When route change completes, finish the bar
    if (loading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Intercept clicks on links for instant feedback
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (target && target.href) {
        const url = new URL(target.href, window.location.href);
        const isInternal = url.origin === window.location.origin;
        const isAnchor = url.pathname === window.location.pathname && url.hash !== '';
        const isSamePage = url.pathname === window.location.pathname && url.search === window.location.search && !url.hash;

        if (isInternal && !isAnchor && !isSamePage && !target.target && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
          setLoading(true);
          setProgress(25);
          setTimeout(() => setProgress(65), 100);
          setTimeout(() => setProgress(85), 400);
        }
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  if (!loading && progress === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 99999,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #B81B54 0%, #E11D48 50%, #F59E0B 100%)',
          boxShadow: '0 0 10px #E11D48, 0 0 5px #B81B54',
          transition: progress === 100 ? 'width 0.2s ease-out, opacity 0.2s ease' : 'width 0.3s cubic-bezier(0.1, 0.5, 0.1, 1)',
          opacity: progress === 100 ? 0 : 1
        }}
      />
    </div>
  );
}
