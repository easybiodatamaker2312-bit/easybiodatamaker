'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// The production GA4 web stream shown in the owner's Analytics property.
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID in Vercel if the stream ever changes.
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-S4MM2PG9K1';

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
    page_path: window.location.pathname,
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
  const firstPathname = useRef(true);

  useEffect(() => {
    // The Google tag sends the first page_view automatically via config.
    // Subsequent App Router navigations need an explicit page_view event.
    if (firstPathname.current) {
      firstPathname.current = false;
      return;
    }

    sendPageView();
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            cookie_flags: 'SameSite=Lax;Secure'
          });
        `}
      </Script>
    </>
  );
}
