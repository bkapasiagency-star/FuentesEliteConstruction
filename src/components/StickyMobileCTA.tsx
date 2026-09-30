import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface StickyMobileCTAProps {
  onRequestEstimate: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onRequestEstimate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#161514] border-t border-stone-800 shadow-2xl p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2">
        {/* CALL NOW */}
        <a
          href={COMPANY_INFO.phoneHref}
          className="flex items-center justify-center gap-2 bg-stone-900 border border-stone-700 text-stone-100 py-3.5 px-3 text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 active:scale-[0.98] transition-all min-h-[48px]"
          aria-label="Call Ivan Fuentes now"
        >
          <Phone className="w-4 h-4 text-[#B85D3B]" />
          <span>CALL NOW</span>
        </a>

        {/* REQUEST ESTIMATE */}
        <button
          onClick={onRequestEstimate}
          className="flex items-center justify-center gap-2 bg-[#B85D3B] text-white py-3.5 px-3 text-xs uppercase tracking-wider font-semibold hover:bg-[#a04e30] active:scale-[0.98] transition-all shadow-md min-h-[48px] cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>REQUEST ESTIMATE</span>
        </button>
      </div>
    </div>
  );
};
