'use client';

import { useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';

export function AdminSessionGuard() {
  const isLoggingOutRef = useRef(false);

  const performLogout = () => {
    if (isLoggingOutRef.current) return;
    isLoggingOutRef.current = true;

    try {
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('admin_tab_session');
        sessionStorage.removeItem('admin_session_time');

        // Immediately invalidate server session cookie
        if (navigator.sendBeacon) {
          navigator.sendBeacon('/api/admin/logout');
        }
        fetch('/api/admin/logout', { method: 'POST', keepalive: true }).catch(() => {});
      }
      supabase.auth.signOut().catch(() => {});
    } finally {
      window.location.href = '/admin/login';
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Detect if the page was refreshed / reloaded (F5 or browser reload)
    let isReload = false;
    try {
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navEntries && navEntries.length > 0) {
        isReload = navEntries[0].type === 'reload';
      } else if ((performance as any)?.navigation?.type === 1) {
        isReload = true;
      }
    } catch {
      // ignore
    }

    if (isReload) {
      performLogout();
      return;
    }

    // 2. Detect if browser was closed and reopened, or accessed without active tab session
    const tabSession = sessionStorage.getItem('admin_tab_session');
    if (!tabSession || tabSession !== 'active') {
      performLogout();
      return;
    }

    // 3. Clear session on browser/tab close or refresh
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('admin_tab_session');
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/admin/logout');
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // 4. Inactivity timeout: auto-logout after 15 minutes of inactivity
    const INACTIVITY_LIMIT_MS = 15 * 60 * 1000;
    let timer: NodeJS.Timeout | null = null;

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        performLogout();
      }, INACTIVITY_LIMIT_MS);
    };

    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(evt => window.addEventListener(evt, resetTimer, { passive: true }));
    resetTimer();

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      events.forEach(evt => window.removeEventListener(evt, resetTimer));
    };
  }, []);

  return null;
}
