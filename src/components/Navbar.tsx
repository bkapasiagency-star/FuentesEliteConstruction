import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onRequestEstimate: () => void;
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About Ivan', href: '#about-ivan' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onRequestEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1C1A17]/95 backdrop-blur-md text-stone-100 shadow-lg py-3 border-b border-stone-800'
            : 'bg-[#1C1A17]/80 backdrop-blur-sm text-stone-100 py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-5">
            <a href="#top" className="group flex shrink-0 flex-col focus:outline-none" aria-label="Fuentes Elite Construction home">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-white group-hover:text-stone-300 transition-colors">
                FUENTES ELITE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase font-medium -mt-0.5">
                CONSTRUCTION · SAN JOSE, CA
              </span>
            </a>

            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] uppercase tracking-widest text-stone-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B85D3B] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-xs font-medium text-stone-200 hover:text-white py-2 px-2.5 transition-colors"
                aria-label={`Call ${COMPANY_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={onRequestEstimate}
                className="inline-flex items-center gap-2 bg-[#B85D3B] hover:bg-[#a34f30] text-white text-[11px] font-semibold uppercase tracking-wider py-2.5 px-4 transition-colors cursor-pointer"
              >
                <span>Get an Estimate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex xl:hidden items-center gap-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="p-2 text-stone-300 hover:text-white border border-stone-800"
                aria-label="Call Ivan Fuentes"
              >
                <Phone className="w-4 h-4 text-[#B85D3B]" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-200 hover:text-white focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-[#161514] text-stone-100 flex flex-col justify-between p-6 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-800">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider uppercase text-white">FUENTES ELITE</span>
                <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase">CONSTRUCTION · SAN JOSE</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-stone-400 hover:text-white" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 py-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-stone-200 hover:text-white border-b border-stone-900 pb-3 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500" />
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-3 pt-6 border-t border-stone-800">
            <a href={COMPANY_INFO.phoneHref} className="flex items-center justify-center gap-3 py-3.5 px-4 bg-stone-900 border border-stone-700 text-stone-200 text-sm font-medium tracking-wide">
              <Phone className="w-4 h-4 text-[#B85D3B]" />
              <span>Call me: {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestEstimate();
              }}
              className="w-full py-3.5 bg-[#B85D3B] hover:bg-[#a34f30] text-white text-xs font-semibold uppercase tracking-wider text-center"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      )}
    </>
  );
};
