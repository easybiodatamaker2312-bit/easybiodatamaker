'use client';

import Script from 'next/script';
import { useCallback, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// The production GA4 web stream shown in the owner's Analytics property.
// It can be overridden at deploy time without changing source code.
const MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-S4MM2P9GK1';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function sendPageView() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
  });
}

export function trackAnalyticsEvent(
  name: string,
  parameters: Record<string, string | number | boolean | undefined> = {},
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const cleanParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined),
  );

  window.gtag('event', name, cleanParameters);
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const analyticsReady = useRef(false);
  const initialPageViewSent = useRef(false);

  const sendCurrentPageView = useCallback(() => {
    if (!analyticsReady.current) return;

    // GA4 is configured with send_page_view:false, so this is the single
    // source of truth for both the initial page and Next.js client navigations.
    sendPageView();
  }, []);

  useEffect(() => {
    if (!analyticsReady.current) return;
    if (!initialPageViewSent.current) return;

    sendCurrentPageView();
  }, [pathname, sendCurrentPageView]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          analyticsReady.current = true;
          window.dataLayer = window.dataLayer || [];
          sendCurrentPageView();
          initialPageViewSent.current = true;
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            send_page_view: false,
            cookie_flags: 'SameSite=Lax;Secure'
          });
        `}
      </Script>
    </>
  );
}
