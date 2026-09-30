import React from 'react';
import { MessageSquare, Ruler, ShieldCheck, Scale } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const icons = [MessageSquare, Ruler, ShieldCheck, Scale];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F4F2EE] text-[#1C1A17] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <span>Homeowner Experience</span>
            <span className="w-8 h-[1px] bg-[#B85D3B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Why Homeowners Choose Me
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            I keep you informed, take care with the prep, and give you honest options throughout the job.
          </p>
        </div>

        {/* 4 Feedback-based Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.number}
                className="bg-white border border-stone-300 p-8 sm:p-10 relative flex flex-col justify-between group hover:border-stone-500 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                    <span className="font-mono text-2xl font-bold text-[#B85D3B]">
                      {item.number}
                    </span>
                    <div className="p-2 bg-stone-100 text-stone-700 group-hover:bg-[#1C1A17] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="font-serif italic text-stone-800 text-base mb-4 font-normal">
                    "{item.subtitle}"
                  </p>

                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-400 uppercase tracking-widest font-medium">
                  Verified Customer Feedback Theme
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
