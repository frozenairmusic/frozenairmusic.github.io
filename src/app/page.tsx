'use client';

import CookieConsent from "@/components/CookieConsent.component";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isSecondSectionVisible, setIsSecondSectionVisible] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSecondSectionVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '100px 0px 0px 0px',
      }
    );

    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }

    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  const handleConsent = (accepted: boolean) => {
    if (typeof window !== 'undefined' && window.handleConsentUpdate) {
      window.handleConsentUpdate(accepted);
    }
  };

  // Calculate subtle movement for colored letters
  const getLetterTransform = (offset: number) => {
    const movement = Math.sin((scrollY + offset) * 0.01) * 3;
    return `translateY(${movement}px)`;
  };

  return (
    <>
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

        <section className="scroll-container" ref={secondSectionRef}>
          <div className="sticky-wrapper">
            <div 
              className={`max-w-2xl px-8 text-center transition-all duration-1000 ease-out ${
                isSecondSectionVisible 
                  ? 'opacity-100 scale-100 blur-0' 
                  : 'opacity-0 scale-90 blur-md'
              }`}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-300">
                A synthesis of absolute zero. Frozen Air explores the tension
                between organic decay and crystalline digital structures. Every
                sound is a captured moment of stillness, processed through the
                lens of modern electronic technology.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

