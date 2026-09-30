import React, { useRef, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPANY_INFO } from '../data/content';
import { PhotoPlaceholder } from './PhotoPlaceholder';

gsap.registerPlugin(ScrollTrigger);

interface IntroductionProps {
  onRequestEstimate: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onRequestEstimate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Animate text block
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Animate image block
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 45, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F8F7F4] text-[#1C1A17] border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center will-change-transform">
            <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              <span>Philosophy &amp; Approach</span>
              <span className="w-8 h-[1px] bg-[#B85D3B]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17] leading-[1.15] mb-8">
              Craftsmanship You Can See.
              <span className="block font-serif italic font-normal text-stone-600">
                Communication You Can Count On.
              </span>
            </h2>

            <div className="space-y-5 text-stone-700 text-base sm:text-lg font-light leading-relaxed">
              <p>
                I care just as much about the work you don’t see. I level the surface, protect against moisture, reinforce concrete, and check drainage before the finish goes in.
              </p>
              <p>
                I keep you in the loop each day, so you know what I’m working on, what comes next, and why it matters.
              </p>
              <p className="font-normal text-stone-900 border-l-2 border-[#B85D3B] pl-4 italic">
                I’m Ivan Fuentes. I stay involved on site and take responsibility for the details from start to finish.
              </p>
              <p>
                From a bathroom remodel to a new patio or fireplace tile, I want the finished work to feel right in your home and hold up over time.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-stone-200 mt-6 mb-8 text-sm">
              <div className="flex items-start gap-2.5 text-stone-800">
                <div className="p-1 bg-stone-200 text-[#B85D3B] mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>I’m hands-on at your project</span>
              </div>
              <div className="flex items-start gap-2.5 text-stone-800">
                <div className="p-1 bg-stone-200 text-[#B85D3B] mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Clear daily updates</span>
              </div>
              <div className="flex items-start gap-2.5 text-stone-800">
                <div className="p-1 bg-stone-200 text-[#B85D3B] mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Careful prep and waterproofing</span>
              </div>
              <div className="flex items-start gap-2.5 text-stone-800">
                <div className="p-1 bg-stone-200 text-[#B85D3B] mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Honest options, no pressure</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={onRequestEstimate}
                className="inline-flex items-center gap-2 bg-[#1C1A17] hover:bg-[#2e2b26] text-white text-xs uppercase tracking-wider font-semibold py-3.5 px-6 transition-colors shadow-sm cursor-pointer"
              >
                <span>Tell Me About Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="text-xs uppercase tracking-wider font-semibold text-stone-800 hover:text-[#B85D3B] transition-colors underline underline-offset-4"
              >
                Or Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Photo placeholder */}
          <div ref={imageRef} className="lg:col-span-5 relative will-change-transform">
            <div className="relative z-10 bg-stone-100 p-2 border border-stone-200 shadow-md">
              <PhotoPlaceholder className="aspect-[4/5]" label="More project photos coming soon" />

              {/* Caption Overlay */}
              <div className="p-4 bg-white border-t border-stone-200">
                <p className="text-xs font-serif italic text-stone-900">
                  "Good prep makes all the difference. I take the time to get it right before the finish goes in."
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100 text-[11px] text-stone-500 uppercase tracking-wider">
                  <span>Ivan Fuentes, Owner</span>
                  <span>San Jose, CA</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset architectural border */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-stone-300 -z-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
