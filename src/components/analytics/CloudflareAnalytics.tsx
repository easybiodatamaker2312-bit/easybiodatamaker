'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const VISITOR_KEY = 'ebm_analytics_visitor_v1';

function getVisitorId(): string | null {
  try {
    let id = window.localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
      window.localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    // If local storage is disabled, do not fall back to a fingerprint.
    return null;
  }
}

/** Counts initial page loads and App Router navigations without collecting query strings. */
export default function CloudflareAnalytics() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || lastPath.current === pathname) return;
    lastPath.current = pathname;

    const visitorId = getVisitorId();
    if (!visitorId) return;

    void fetch('/api/analytics/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'page_view', visitorId }),
      keepalive: true,
    }).catch(() => {
      // Analytics must never interrupt page navigation or the biodata builder.
    });
  }, [pathname]);

  return null;
}
