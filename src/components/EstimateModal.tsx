import React, { useState } from 'react';
import { X, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: preselectedService || 'Tile Installation',
    projectDetails: '',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#201E1C] border border-stone-700 text-stone-100 max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white border border-stone-800 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#B85D3B]/20 text-[#B85D3B] border border-[#B85D3B]/40 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Estimate Request Received
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed max-w-md mx-auto">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. Ivan Fuentes will review your project details and contact you at <span className="text-white font-medium">{formData.phone}</span> shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="py-3 px-6 bg-[#B85D3B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#a04e30] transition-colors"
              >
                Close &amp; Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-stone-800">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#B85D3B] font-semibold mb-1">
                Fast Turnaround
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Request a Free Estimate
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Share your project details with Ivan Fuentes for a prompt, transparent quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Miller"
                    className="w-full bg-stone-900 border border-stone-700 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(408) 000-0000"
                    className="w-full bg-stone-900 border border-stone-700 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-stone-900 border border-stone-700 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                    City / Neighborhood
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="San Jose, Los Gatos, etc."
                    className="w-full bg-stone-900 border border-stone-700 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B85D3B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                  Project Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-700 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B85D3B]"
                >
                  <option value="Tile Installation">Tile Installation (Floors, Walls, Custom)</option>
                  <option value="Bathroom Remodeling">Bathroom Remodeling &amp; Shower</option>
                  <option value="Concrete Work">Concrete (Patios, Driveways, Sidewalks)</option>
                  <option value="Masonry & Hardscape">Masonry &amp; Hardscape (Pavers, Stone)</option>
                  <option value="Flooring">Residential Flooring</option>
                  <option value="Fireplace Surrounds">Fireplace Tile / Stonework</option>
                  <option value="Residential Construction Improvements">General Residential Improvement</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Share square footage, current state, materials, or specific goals..."
                  className="w-full bg-stone-900 border border-stone-700 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#B85D3B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#B85D3B] hover:bg-[#a04e30] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? 'Submitting Details...' : 'Request Free Estimate'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-3 border-t border-stone-800 text-center">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-xs text-stone-300 hover:text-white"
                >
                  <Phone className="w-3 h-3 text-[#B85D3B]" />
                  <span>Prefer to speak directly? Call Ivan at <strong>{COMPANY_INFO.phone}</strong></span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
