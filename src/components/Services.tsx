import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;

    const cards = gridRef.current.querySelectorAll('.service-card-item');
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#EFECE6] text-[#1C1A17] border-b border-stone-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-300">
          <div>
            <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <span>Expertise &amp; Capabilities</span>
              <span className="w-8 h-[1px] bg-[#B85D3B]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17]">
              Specialized Craftsmanship Services
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Delivering precision installation, durable structural preparation, and architectural finishes across the South Bay.
          </p>
        </div>

        {/* Services Grid with Staggered Fade-In-Up Animation */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="service-card-item bg-[#F8F7F4] border border-stone-300 flex flex-col justify-between group hover:border-stone-500 transition-all duration-300 shadow-sm hover:shadow-md will-change-transform"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-[0.95]"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#1C1A17]/85 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 tracking-wider">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="border-t border-stone-200 pt-4">
                      <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-3">
                        Included Specialties
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((item, fIdx) => (
                          <li key={fIdx} className="text-xs text-stone-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B85D3B] mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-4 bg-stone-200 hover:bg-[#1C1A17] text-stone-800 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-between group-hover:bg-[#1C1A17] group-hover:text-white cursor-pointer"
                  >
                    <span>Request Quote for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
