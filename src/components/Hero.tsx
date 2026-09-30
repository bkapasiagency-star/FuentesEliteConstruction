import React, { useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPANY_INFO } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onRequestEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestEstimate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgImageRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle architectural parallax on background image
      gsap.fromTo(
        bgImageRef.current,
        {
          yPercent: 0,
          scale: 1.12,
        },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Subtle atmospheric fade on text content as user scrolls down
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -40,
          opacity: 0.65,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 bg-[#161514] text-stone-100 overflow-hidden"
    >
      {/* Photo placeholder background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgImageRef}
          aria-label="Project photo coming soon"
          role="img"
          className="absolute inset-0 h-[125%] -top-[12%] w-full bg-[#302923] bg-[linear-gradient(135deg,#302923,#56483d_48%,#221f1b)] will-change-transform"
        />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4c8b8_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
        {/* Subtle architectural vignette & gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161514] via-[#161514]/40 to-[#161514]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(22,21,20,0.6)_100%)] pointer-events-none" />
      </div>
      <div className="absolute bottom-6 right-4 z-10 border border-white/20 bg-[#161514]/50 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-stone-400 sm:right-8">
        Project photos coming soon
      </div>

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center will-change-transform"
      >
        {/* Unboxed architectural eyebrow tag */}
        <div className="flex items-center gap-2 text-stone-300 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium mb-6">
          <span className="w-6 h-[1px] bg-[#B85D3B]" />
          <span>San Jose &amp; South Bay Residential Construction</span>
          <span className="w-6 h-[1px] bg-[#B85D3B]" />
        </div>

        {/* Hero headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] sm:leading-[1.08] mb-6">
          Built With Precision.
          <span className="block italic font-normal text-stone-300 font-serif">Finished To Last.</span>
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl font-light leading-relaxed mb-10">
          I help homeowners across San Jose and the South Bay get tile, concrete, masonry, and hardscape work done right.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={onRequestEstimate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#B85D3B] hover:bg-[#a04e30] text-white font-semibold text-sm uppercase tracking-wider py-4 px-8 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer"
          >
            <span>Request a Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-stone-400/40 hover:border-stone-200 text-stone-200 hover:text-white font-medium text-sm uppercase tracking-wider py-4 px-8 transition-colors bg-white/5 hover:bg-white/10 backdrop-blur-sm"
          >
            <span>See Project Types</span>
          </a>
        </div>

        {/* Trust line below CTA */}
        <div className="flex items-center justify-center gap-2 text-stone-300 text-xs sm:text-sm tracking-wide font-normal">
          <CheckCircle2 className="w-4 h-4 text-[#B85D3B] flex-shrink-0" />
          <span>{COMPANY_INFO.licenseText}</span>
        </div>
      </div>

      {/* Subtle animated scroll indicator */}
      <a
        href="#trust-bar"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-stone-400 hover:text-stone-200 transition-colors group cursor-pointer"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-light opacity-80 group-hover:opacity-100">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-stone-400 group-hover:text-stone-200" />
      </a>
    </section>
  );
};
