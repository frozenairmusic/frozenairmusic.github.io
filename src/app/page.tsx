'use client';

import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  const handleConsent = (accepted: boolean) => {
    if (typeof window !== 'undefined' && window.handleConsentUpdate) {
      window.handleConsentUpdate(accepted);
    }
  };

  return (
    <>
      <div className="noise"></div>

      <CookieConsent onConsent={handleConsent} />

      <section className="scroll-container">
        <div className="sticky-wrapper">
          <div className="scroll-animate text-center px-4">
            <h1 className="logo text-4xl md:text-6xl font-normal mb-8">
              F<span className="logo__secondary-color">r</span>ozen{" "}
              <span className="logo__primary-color">Ai</span>
              <span className="logo__secondary-color">r</span>
            </h1>
            <p className="text-xs uppercase tracking-[0.5rem] text-zinc-500">
              Electronic Audio Project
            </p>
          </div>
        </div>
      </section>

      <section className="scroll-container">
        <div className="sticky-wrapper">
          <div className="scroll-animate max-w-2xl px-8 text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-300">
              A synthesis of absolute zero. Frozen Air explores the tension
              between organic decay and crystalline digital structures. Every
              sound is a captured moment of stillness, processed through the
              lens of modern electronic technology.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-[10px] tracking-[0.3rem] text-zinc-600 uppercase">
        © 2026 Frozen Air — Built for the Void
      </footer>
    </>
  );
}

