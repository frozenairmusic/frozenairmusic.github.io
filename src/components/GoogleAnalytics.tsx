'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = 'G-0YTM7JQHWJ';
const CONSENT_KEY = 'frozenair_analytics_consent';

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    setHasConsent(consent === 'true');
  }, []);

  const handleConsentUpdate = (accepted: boolean) => {
    setHasConsent(accepted);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.handleConsentUpdate = handleConsentUpdate;
    }
  }, []);

  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}
