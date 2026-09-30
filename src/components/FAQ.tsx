import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus, Phone, HelpCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FAQ_ITEMS, FAQItem, COMPANY_INFO } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface FAQProps {
  onRequestEstimate: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onRequestEstimate }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id, FAQ_ITEMS[1].id]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const sectionRef = useRef<HTMLElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'timelines', label: 'Timelines' },
    { id: 'materials', label: 'Material Sourcing' },
    { id: 'permits', label: 'Permits & City Code' },
    { id: 'process', label: 'Job Site & Process' },
  ];

  const filteredItems = activeCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Staggered reveal on scroll
  useEffect(() => {
    if (!accordionRef.current || !sectionRef.current) return;

    const items = accordionRef.current.querySelectorAll('.faq-item-card');
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: accordionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F4F2EE] text-[#1C1A17] border-b border-stone-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-stone-300">
          <div>
            <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <span>Clarity &amp; Transparency</span>
              <span className="w-8 h-[1px] bg-[#B85D3B]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17]">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Straightforward answers regarding construction schedules, material procurement, and California building permits.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs uppercase tracking-wider font-semibold py-2.5 px-4 transition-all border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1C1A17] text-white border-[#1C1A17] shadow-sm'
                  : 'bg-white/80 text-stone-700 border-stone-300 hover:border-stone-500 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div ref={accordionRef} className="space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="faq-item-card bg-white border border-stone-300 transition-all duration-300 hover:border-stone-400 shadow-xs will-change-transform"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85D3B]"
                >
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <span className="font-mono text-xs font-bold text-[#B85D3B] mt-1 shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2 border transition-colors shrink-0 mt-0.5 ${
                      isOpen
                        ? 'bg-[#1C1A17] text-white border-[#1C1A17]'
                        : 'bg-stone-100 text-stone-700 border-stone-300'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-stone-100 pl-11 sm:pl-14">
                    <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#EFECE6] border border-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white border border-stone-300 text-[#B85D3B] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-stone-900">
                Have a question about your specific property or plans?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light mt-0.5">
                Ivan Fuentes is happy to review photos, dimensions, and architectural drawings.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href={COMPANY_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 border border-stone-400 bg-white text-stone-900 hover:border-stone-900 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B85D3B]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={onRequestEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#B85D3B] hover:bg-[#a04e30] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Ask Ivan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
