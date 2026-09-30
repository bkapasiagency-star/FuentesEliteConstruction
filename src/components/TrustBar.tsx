import React from 'react';
import { Star, ShieldCheck, Users, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const TrustBar: React.FC = () => {
  const proofs = [
    {
      metric: "4.9 / 5",
      label: "Average Rating",
      subtext: "Consistent quality across residential projects",
      icon: Star
    },
    {
      metric: "19 Reviews",
      label: "Customer Feedback",
      subtext: "Verified South Bay homeowner reviews",
      icon: Award
    },
    {
      metric: "Licensed",
      label: "California Contractor",
      subtext: "Residential & commercial construction compliance",
      icon: ShieldCheck
    },
    {
      metric: "8-Person Team",
      label: "Dedicated In-House Crew",
      subtext: "Hands-on craftsmanship & daily project management",
      icon: Users
    }
  ];

  return (
    <section id="trust-bar" className="bg-[#201E1C] border-y border-stone-800 text-stone-100 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-stone-800">
          {proofs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.metric}
                className={`flex flex-col items-start ${
                  idx !== 0 ? 'lg:pl-8' : ''
                } transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-[#B85D3B]" />
                  <span className="text-[11px] uppercase tracking-widest text-stone-400 font-medium">
                    {item.label}
                  </span>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                  {item.metric}
                </div>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
