'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'frozenair_analytics_consent';

interface CookieConsentProps {
  onConsent: (accepted: boolean) => void;
}

export default function CookieConsent({ onConsent }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === null) {
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem(CONSENT_KEY, accepted ? 'true' : 'false');
    setIsVisible(false);
    onConsent(accepted);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`cookie-banner ${isVisible ? 'visible' : ''}`}>
      <p className="cookie-banner__text">
        We use analytics to understand how visitors interact with our site. Your data helps us improve the experience.
      </p>
      <div className="cookie-banner__buttons">
        <button
          onClick={() => handleConsent(true)}
          className="cookie-banner__button cookie-banner__button--accept"
        >
          Accept
        </button>
        <button
          onClick={() => handleConsent(false)}
          className="cookie-banner__button"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
