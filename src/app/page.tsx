'use client';

import CookieConsent from "@/components/CookieConsent.component";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsent = (accepted: boolean) => {
    if (typeof window !== 'undefined' && window.handleConsentUpdate) {
      window.handleConsentUpdate(accepted);
    }
  };

  const getLetterTransform = (offset: number) => {
    const movement = Math.sin((scrollY + offset) * 0.01) * 3;
    return `translateY(${movement}px)`;
  };

  const getSentenceBlur = (index: number) => {
    const sectionStart = (typeof window !== 'undefined' ? window.innerHeight : 800) * 2.5;
    const triggerPoint = sectionStart + (index * 450);
    const scrollProgress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 400));
    const blur = 10 - (scrollProgress * 10);
    const opacity = 0.1 + (scrollProgress * 0.9);
    return {
      filter: `blur(${blur}px)`,
      opacity: opacity,
      transition: 'filter 0.4s ease-out, opacity 0.4s ease-out'
    };
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MusicGroup',
            name: 'Frozen Air',
            description: 'Electronic music project exploring the tension between organic decay and crystalline digital structures',
            genre: ['Electronic', 'Ambient', 'Experimental'],
            url: 'https://frozenairmusic.com',
            sameAs: [],
          }),
        }}
      />
      
      <div className="noise"></div>

      <CookieConsent onConsent={handleConsent} />

      <div className="-mt-14 md:-mt-16">
        <section className="scroll-container">
          <div className="sticky-wrapper">
            <div className="scroll-animate text-center px-4">
              <h1 className="logo text-4xl md:text-6xl font-normal mb-8">
                F<span className="logo__secondary-color inline-block transition-transform duration-100" style={{ transform: getLetterTransform(0) }}>r</span>ozen{" "}
                <span className="logo__primary-color inline-block transition-transform duration-100" style={{ transform: getLetterTransform(50) }}>Ai</span>
                <span className="logo__secondary-color inline-block transition-transform duration-100" style={{ transform: getLetterTransform(100) }}>r</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.2rem] md:tracking-[0.5rem] text-zinc-500">
                Electronic Audio Project
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-container">
          <div className="sticky-wrapper">
            <div className="max-w-2xl px-8 text-center space-y-6">
              <div className="text-xl md:text-2xl leading-relaxed text-zinc-300" style={getSentenceBlur(0)}>
                A synthesis of absolute zero.
              </div>
              <div className="text-xl md:text-2xl leading-relaxed text-zinc-300" style={getSentenceBlur(1)}>
                Frozen Air explores the tension between organic decay and crystalline digital structures.
              </div>
              <div className="text-xl md:text-2xl leading-relaxed text-zinc-300" style={getSentenceBlur(2)}>
                Every sound is a captured moment of stillness, processed through the lens of modern electronic technology.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

