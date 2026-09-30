import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/content';

export const CustomerReviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#1C1A17] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verified 4.9 ★ / 19 Reviews Display */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <span>Homeowner Endorsements</span>
              <span className="w-8 h-[1px] bg-[#B85D3B]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Customer Reviews
            </h2>
          </div>

          {/* Real Proof Badge */}
          <div className="mt-6 md:mt-0 flex items-center gap-6 bg-stone-900 border border-stone-800 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold text-white">4.9</span>
              <div className="flex flex-col">
                <div className="flex text-[#B85D3B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Rating</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-stone-800" />
            <div>
              <span className="font-serif text-2xl font-bold text-white block">19</span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider">Reviews</span>
            </div>
          </div>
        </div>

        {/* Featured Big Review Display */}
        <div className="bg-stone-900/90 border border-stone-800 p-8 sm:p-12 mb-10 relative">
          <Quote className="w-12 h-12 text-[#B85D3B]/25 absolute top-6 right-6 pointer-events-none" />

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#B85D3B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-stone-400 text-xs tracking-wider uppercase">
                • {REVIEWS[activeTab].projectType}
              </span>
            </div>

            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-stone-100 leading-relaxed font-light mb-8">
              "{REVIEWS[activeTab].quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-800 border border-stone-700 flex items-center justify-center font-mono text-xs font-bold text-stone-300">
                  {REVIEWS[activeTab].initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <span>Verified Homeowner</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D3B]" />
                  </div>
                  <div className="text-xs text-stone-400">
                    {REVIEWS[activeTab].location}
                  </div>
                </div>
              </div>

              {/* Highlight badge */}
              <div className="text-xs text-stone-300 bg-stone-800/80 px-3.5 py-1.5 border border-stone-700/60 max-w-md">
                <span className="text-[#B85D3B] font-semibold mr-1.5">Highlight:</span>
                "{REVIEWS[activeTab].highlight}"
              </div>
            </div>
          </div>
        </div>

        {/* Review Selector Cards (All 5 verified reviews accessible) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {REVIEWS.map((review, idx) => (
            <button
              key={review.id}
              onClick={() => setActiveTab(idx)}
              className={`text-left p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                activeTab === idx
                  ? 'bg-stone-800 border-[#B85D3B] text-white shadow-md'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
              }`}
            >
              <div>
                <div className="flex text-[#B85D3B] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-semibold text-stone-200 mb-1 line-clamp-1">
                  {review.projectType}
                </div>
                <p className="text-[11px] text-stone-400 line-clamp-3 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-stone-800 text-[10px] uppercase tracking-wider text-stone-500 font-mono">
                Review 0{idx + 1}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
