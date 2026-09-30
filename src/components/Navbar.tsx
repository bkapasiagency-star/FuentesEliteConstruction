import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onRequestEstimate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#projects' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Process', href: '#process' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'About Ivan', href: '#about-ivan' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1C1A17]/95 backdrop-blur-md text-stone-100 shadow-lg py-3.5 border-b border-stone-800'
            : 'bg-[#1C1A17]/80 backdrop-blur-sm text-stone-100 py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="group flex flex-col focus:outline-none">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-white group-hover:text-stone-300 transition-colors">
                FUENTES ELITE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase font-medium -mt-0.5">
                CONSTRUCTION · SAN JOSE, CA
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-stone-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B85D3B] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Contact & CTA actions */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-2 text-xs font-medium tracking-wide text-stone-200 hover:text-white py-2 px-3 transition-colors border border-stone-700/60 hover:border-stone-500 bg-stone-900/40"
                aria-label={`Call ${COMPANY_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={onRequestEstimate}
                className="inline-flex items-center gap-2 bg-[#B85D3B] hover:bg-[#a34f30] text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-5 transition-all shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
              >
                <span>Request Estimate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex sm:hidden items-center gap-2">
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
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#161514] text-stone-100 flex flex-col justify-between p-6 overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-800">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider uppercase text-white">
                  FUENTES ELITE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase">
                  CONSTRUCTION · SAN JOSE
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 py-8">
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
            <a
              href={COMPANY_INFO.phoneHref}
              className="flex items-center justify-center gap-3 py-3.5 px-4 bg-stone-900 border border-stone-700 text-stone-200 text-sm font-medium tracking-wide"
            >
              <Phone className="w-4 h-4 text-[#B85D3B]" />
              <span>Call Ivan: {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestEstimate();
              }}
              className="w-full py-3.5 bg-[#B85D3B] hover:bg-[#a34f30] text-white text-xs font-semibold uppercase tracking-wider text-center"
            >
              Request Free Estimate
            </button>
            <p className="text-[11px] text-center text-stone-400 mt-1">
              {COMPANY_INFO.licenseText}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
