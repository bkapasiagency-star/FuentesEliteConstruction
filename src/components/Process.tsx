import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/content';

interface ProcessProps {
  onRequestEstimate: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onRequestEstimate }) => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8F7F4] text-[#1C1A17] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-300">
          <div>
            <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <span>Working Together</span>
              <span className="w-8 h-[1px] bg-[#B85D3B]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17]">
              Our 4-Step Process
            </h2>
          </div>
          <p className="text-stone-600 text-sm sm:text-base font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Straightforward and structured from initial site evaluation to the final walkthrough.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-stone-300 p-6 sm:p-8 flex flex-col justify-between group hover:border-stone-500 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="text-3xl font-serif font-bold text-[#B85D3B] mb-6 pb-3 border-b border-stone-100 flex items-center justify-between">
                  <span>{step.step}</span>
                  <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-[#B85D3B] transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] uppercase tracking-wider text-stone-400">
                Phase {step.step}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-stone-600">
          <span>Ready to begin Step 01?</span>
          <button
            onClick={onRequestEstimate}
            className="text-stone-900 font-semibold underline underline-offset-4 hover:text-[#B85D3B] cursor-pointer"
          >
            Submit project details for review
          </button>
          <span>or call directly:</span>
          <a
            href={COMPANY_INFO.phoneHref}
            className="text-stone-900 font-semibold flex items-center gap-1 hover:text-[#B85D3B]"
          >
            <Phone className="w-3.5 h-3.5 text-[#B85D3B]" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
