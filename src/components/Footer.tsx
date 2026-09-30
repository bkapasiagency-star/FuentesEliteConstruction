import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121110] text-stone-300 pt-16 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Logo & Bio Column */}
          <div className="lg:col-span-5">
            <a href="#" className="flex flex-col mb-4 focus:outline-none">
              <span className="font-serif text-2xl font-bold tracking-wider uppercase text-white">
                FUENTES ELITE
              </span>
              <span className="text-xs tracking-[0.25em] text-stone-400 uppercase font-medium">
                CONSTRUCTION
              </span>
            </a>

            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
              Precision tile installation, architectural concrete, masonry, flooring, and residential improvements led by Ivan Fuentes across San Jose and the South Bay.
            </p>

            <div className="text-xs text-stone-500 font-mono">
              {COMPANY_INFO.licenseText}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-400 mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <a href="#" className="text-stone-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-stone-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-stone-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-stone-400 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-stone-400 hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#about-ivan" className="text-stone-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="text-stone-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-400 mb-4">
              Direct Contact
            </div>

            <div className="space-y-4 text-xs text-stone-300">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3 p-3 bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors text-white"
              >
                <Phone className="w-4 h-4 text-[#B85D3B] flex-shrink-0" />
                <span className="font-serif font-bold text-sm tracking-wide">
                  {COMPANY_INFO.phone}
                </span>
              </a>

              <div className="flex items-center gap-3 p-3 bg-stone-900 border border-stone-800 text-stone-300">
                <MapPin className="w-4 h-4 text-[#B85D3B] flex-shrink-0" />
                <span>San Jose, CA · South Bay Area</span>
              </div>

              <div className="p-3 bg-stone-900/50 border border-stone-800/80 text-[11px] text-stone-400">
                Primary Service Communities: San Jose, Los Gatos, Saratoga, Cupertino, Morgan Hill, Gilroy
              </div>
            </div>
          </div>
        </div>

        {/* Legal bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <div>
            © 2026 Fuentes Elite Construction. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Owner: Ivan Fuentes</span>
            <span>·</span>
            <span>California Residential &amp; Commercial</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
