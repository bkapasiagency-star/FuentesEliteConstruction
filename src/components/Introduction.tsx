import React, { useRef, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPANY_INFO } from '../data/content';

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
                In residential construction, the final look is only part of the story. True quality is defined by the work that happens before the finish layer is ever applied—leveling subfloors, setting moisture barriers, reinforcing concrete with rebar, and ensuring exact slopes for drainage.
              </p>
              <p>
                Just as critical is how the project is run. Homeowners deserve clear communication every single day: knowing what is happening, what comes next, and why specific steps are taken.
              </p>
              <p className="font-normal text-stone-900 border-l-2 border-[#B85D3B] pl-4 italic">
                Led by Ivan Fuentes, Fuentes Elite Construction brings a hands-on approach to tile, concrete, masonry and residential improvement projects.
              </p>
              <p>
                Whether remodeling a master bathroom, pouring a new architectural concrete patio, or installing slate over a fireplace, Ivan and his team work directly on-site to ensure work is completed properly down to the millimeter.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-stone-200 mt-6 mb-8 text-sm">
              <div className="flex items-start gap-2.5 text-stone-800">
                <div className="p-1 bg-stone-200 text-[#B85D3B] mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Direct on-site oversight by Ivan Fuentes</span>
              </div>
              <div className="flex items-start gap-2.5 text-stone-800">
                <div className="p-1 bg-stone-200 text-[#B85D3B] mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Daily progress updates &amp; clear milestone planning</span>
              </div>
              <div className="flex items-start gap-2.5 text-stone-800">
                <div className="p-1 bg-stone-200 text-[#B85D3B] mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Rigorous substrate prep &amp; waterproofing</span>
              </div>
              <div className="flex items-start gap-2.5 text-stone-800">
                <div className="p-1 bg-stone-200 text-[#B85D3B] mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Transparent options with zero pressure</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={onRequestEstimate}
                className="inline-flex items-center gap-2 bg-[#1C1A17] hover:bg-[#2e2b26] text-white text-xs uppercase tracking-wider font-semibold py-3.5 px-6 transition-colors shadow-sm cursor-pointer"
              >
                <span>Discuss Your Project With Ivan</span>
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

          {/* Right Column: Architectural Craftsman Imagery */}
          <div ref={imageRef} className="lg:col-span-5 relative will-change-transform">
            <div className="relative z-10 bg-stone-100 p-2 border border-stone-200 shadow-md">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Craftsman contractor performing careful surface preparation and masonry work on a residential site"
                  className="w-full h-full object-cover object-center filter saturate-[0.95]"
                  loading="lazy"
                />
              </div>

              {/* Caption Overlay */}
              <div className="p-4 bg-white border-t border-stone-200">
                <p className="text-xs font-serif italic text-stone-900">
                  "Every millimeter in the preparation stage determines how clean and durable the finished surface will be ten years from now."
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
