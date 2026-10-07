'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const MEASUREMENT_ID = 'G-S4MM2P9GK1';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (!pathname || firstRender.current) {
      firstRender.current = false;
      return;
    }

    const pageLocation = `${window.location.origin}${pathname}${window.location.search}`;
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_location: pageLocation,
        page_title: document.title,
      });
    }
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
          gtag('config', '${MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
