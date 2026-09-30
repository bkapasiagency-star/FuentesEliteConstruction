import React from 'react';
import { MapPin, CheckCircle, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const ServiceArea: React.FC = () => {
  return (
    <section id="service-area" className="py-20 sm:py-28 bg-[#EFECE6] text-[#1C1A17] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <span>Local Coverage</span>
            <span className="w-8 h-[1px] bg-[#B85D3B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17] mb-4">
            Service Area
          </h2>
          <p className="text-stone-700 text-lg sm:text-xl font-serif italic mb-3">
            "Serving homeowners across San Jose and surrounding South Bay communities."
          </p>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Our company is based in San Jose, allowing our crew to provide prompt on-site consultations, reliable morning project arrival times, and dedicated craftsmanship without subcontractor handoffs.
          </p>
        </div>

        {/* Communities Grid & Map Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Community Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPANY_INFO.serviceAreas.map((area) => (
              <div
                key={area.name}
                className="bg-[#F8F7F4] border border-stone-300 p-6 flex flex-col justify-between hover:border-stone-500 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#B85D3B]" />
                      {area.name}
                    </h3>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500">
                      CA
                    </span>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#B85D3B] font-semibold mb-2">
                    {area.label}
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {area.note}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-2 text-[11px] text-stone-500">
                  <CheckCircle className="w-3.5 h-3.5 text-stone-400" />
                  <span>Residential Services Available</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Architectural Map Graphic & Service Commitment */}
          <div className="lg:col-span-5 bg-[#1C1A17] text-stone-100 p-8 sm:p-10 border border-stone-800 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest font-mono mb-4">
                <Navigation className="w-4 h-4 text-[#B85D3B]" />
                <span>Primary Hub: San Jose, CA</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Dedicated Local Focus
              </h3>

              <p className="text-stone-300 text-sm font-light leading-relaxed mb-6">
                By intentionally focusing on San Jose and nearby South Bay cities, Ivan Fuentes and his 8-person crew maintain full control over quality and timeline commitments.
              </p>

              {/* Verified Cities List */}
              <div className="space-y-2 border-y border-stone-800 py-6 mb-6">
                <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-3">
                  Verified Service Locations:
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-stone-200">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B85D3B]" />
                    <span>San Jose</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B85D3B]" />
                    <span>Los Gatos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B85D3B]" />
                    <span>Saratoga</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B85D3B]" />
                    <span>Cupertino</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B85D3B]" />
                    <span>Morgan Hill</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#B85D3B]" />
                    <span>Gilroy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-stone-400 pt-2">
              <span className="text-stone-200 font-medium">Located nearby?</span> Contact Ivan at{' '}
              <a href={COMPANY_INFO.phoneHref} className="text-[#B85D3B] underline underline-offset-2">
                {COMPANY_INFO.phone}
              </a>{' '}
              to check project availability.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
