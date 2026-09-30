import React, { useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPANY_INFO } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface AboutIvanProps {
  onRequestEstimate: () => void;
}

export const AboutIvan: React.FC<AboutIvanProps> = ({ onRequestEstimate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
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
      id="about-ivan"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F8F7F4] text-[#1C1A17] border-b border-stone-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div ref={imageRef} className="lg:col-span-5 order-2 lg:order-1 will-change-transform">
            <div className="relative bg-white p-3 border border-stone-300 shadow-md">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1000&q=80"
                  alt="Ivan Fuentes, Founder and Craftsman behind Fuentes Elite Construction"
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-stone-50 border-t border-stone-200 mt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900">
                      Ivan Fuentes
                    </h3>
                    <p className="text-xs text-stone-500 uppercase tracking-wider">
                      Owner &amp; Lead Craftsman
                    </p>
                  </div>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="p-2.5 bg-stone-900 text-white hover:bg-[#B85D3B] transition-colors"
                    aria-label={`Call Ivan at ${COMPANY_INFO.phone}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div ref={contentRef} className="lg:col-span-7 order-1 lg:order-2 will-change-transform">
            <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <span>Leadership &amp; Values</span>
              <span className="w-8 h-[1px] bg-[#B85D3B]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17] mb-6">
              Meet Ivan
            </h2>

            <p className="text-lg sm:text-xl font-serif text-stone-800 italic leading-relaxed mb-6">
              "Fuentes Elite Construction is led by Ivan Fuentes, bringing a hands-on approach to residential construction, tile and masonry projects."
            </p>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                Ivan believes that quality construction starts with open respect for the homeowner's home and time. Rather than delegating critical steps to unknown subcontractors, Ivan remains directly involved on-site, guiding the crew and answering homeowner questions firsthand.
              </p>
              <p>
                From recommending smart repairs while walls are down to studs, to explaining mortar curing times and joint layout options, Ivan prioritizes helping homeowners understand the why behind every step.
              </p>
            </div>

            {/* 4 Core Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
                <h4 className="font-serif text-base font-bold text-stone-900">
                  Communication
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-light">
                  Daily updates on today's progress and tomorrow's expectations.
                </p>
              </div>

              <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
                <h4 className="font-serif text-base font-bold text-stone-900">
                  Craftsmanship
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-light">
                  Strict precision across tile, concrete flatwork, and stone masonry.
                </p>
              </div>

              <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
                <h4 className="font-serif text-base font-bold text-stone-900">
                  Attention To Detail
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-light">
                  Substrate preparation, waterproof barriers, and clean grout lines.
                </p>
              </div>

              <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
                <h4 className="font-serif text-base font-bold text-stone-900">
                  Helping Homeowners
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-light">
                  Giving you the facts to make informed decisions without pressure.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onRequestEstimate}
                className="w-full sm:w-auto py-3.5 px-6 bg-[#1C1A17] hover:bg-[#2b2824] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Schedule A Walkthrough With Ivan
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="text-xs uppercase tracking-wider text-stone-800 hover:text-[#B85D3B] font-semibold py-2"
              >
                Direct: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
