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
                  src="/images/ivan-fuentes.png"
                  alt="Ivan Fuentes, owner of Fuentes Elite Construction"
                  className="w-full h-full object-contain object-bottom"
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
                      Owner &amp; Carpenter
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
              <span>A Little About Me</span>
              <span className="w-8 h-[1px] bg-[#B85D3B]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17] mb-6">
              Meet Ivan
            </h2>

            <p className="text-lg sm:text-xl font-serif text-stone-800 italic leading-relaxed mb-6">
              "I’m Ivan. I take pride in doing the job right and treating your home with respect."
            </p>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                I stay involved on the job, keep you updated, and make time for your questions. Your home matters to me, and I treat it with care.
              </p>
              <p>
                If I find an issue, I’ll show you what I’m seeing, explain your options, and let you decide how to move forward.
              </p>
            </div>

            {/* 4 Core Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
                <h4 className="font-serif text-base font-bold text-stone-900">
                  Communication
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-light">
                  I’ll keep you up to date on the work and what comes next.
                </p>
              </div>

              <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
                <h4 className="font-serif text-base font-bold text-stone-900">
                  Craftsmanship
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-light">
                  I take care with tile, concrete, and stonework.
                </p>
              </div>

              <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
                <h4 className="font-serif text-base font-bold text-stone-900">
                  Attention To Detail
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-light">
                  I focus on the prep that helps the finish last.
                </p>
              </div>

              <div className="border-l-2 border-[#B85D3B] pl-4 py-1">
                <h4 className="font-serif text-base font-bold text-stone-900">
                  Helping Homeowners
                </h4>
                <p className="text-xs text-stone-600 mt-0.5 font-light">
                  I’ll explain your options and give you room to decide.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onRequestEstimate}
                className="w-full sm:w-auto py-3.5 px-6 bg-[#1C1A17] hover:bg-[#2b2824] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Let’s Talk About Your Project
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="text-xs uppercase tracking-wider text-stone-800 hover:text-[#B85D3B] font-semibold py-2"
              >
                Direct: {COMPANY_INFO.phone}
              </a>
            </div>

            <div className="mt-8 border-t border-stone-300 pt-6">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-3">Certifications &amp; Licenses</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
                <li>C-54 Tile Contractor License</li>
                <li>EMT Certification</li>
                <li>CPR Certified</li>
                <li>Carpenter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
