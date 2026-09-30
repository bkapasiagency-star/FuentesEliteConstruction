import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';

interface FinalCTAProps {
  initialService?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialService || 'Tile Installation',
    projectDetails: '',
    addressOrCity: '',
    timeline: 'Within 1-2 months'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean realistic processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#161514] text-stone-100 relative overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B85D3B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dark Impact Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
                <span>Start The Conversation</span>
                <span className="w-8 h-[1px] bg-[#B85D3B]" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
                Planning A Project?
              </h2>

              <p className="text-stone-300 text-lg sm:text-xl font-light mb-8 leading-relaxed">
                Tell us what you're looking to build, replace or remodel.
              </p>

              <div className="space-y-6 pt-6 border-t border-stone-800">
                {/* Phone highlight */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-900 border border-stone-800 text-[#B85D3B]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                      Direct Phone
                    </div>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-xl sm:text-2xl font-serif font-bold text-white hover:text-[#B85D3B] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Call or text Ivan directly for prompt responses
                    </p>
                  </div>
                </div>

                {/* Service area highlight */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-stone-900 border border-stone-800 text-stone-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                      Service Headquarters
                    </div>
                    <div className="text-base font-medium text-white">
                      San Jose, California
                    </div>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Serving San Jose, Los Gatos, Saratoga, Cupertino, Morgan Hill &amp; Gilroy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance note */}
            <div className="mt-12 p-5 bg-stone-900/60 border border-stone-800/80 text-xs text-stone-300 font-light">
              <span className="font-semibold text-white block mb-1">
                Zero Pressure Guarantee:
              </span>
              Ivan provides direct, honest walkthroughs with clear options. You will never receive aggressive sales calls.
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 bg-[#201E1C] border border-stone-800 p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 px-4 text-center">
                <div className="w-16 h-16 bg-[#B85D3B]/20 text-[#B85D3B] border border-[#B85D3B]/40 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Your project details regarding <strong className="text-white">{formData.projectType}</strong> have been received. Ivan Fuentes will review your submission and contact you at <strong className="text-white">{formData.phone}</strong> shortly to discuss your estimate.
                </p>
                <div className="p-4 bg-stone-900 border border-stone-800 text-xs text-stone-400 max-w-md mx-auto mb-8 text-left">
                  <div className="font-mono uppercase text-stone-500 text-[10px] mb-2 tracking-wider">
                    Submission Summary
                  </div>
                  <div><strong>Name:</strong> {formData.name}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Service:</strong> {formData.projectType}</div>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      projectType: 'Tile Installation',
                      projectDetails: '',
                      addressOrCity: '',
                      timeline: 'Within 1-2 months'
                    });
                  }}
                  className="py-2.5 px-6 border border-stone-700 text-xs uppercase tracking-wider text-stone-300 hover:text-white hover:border-stone-500 transition-colors"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-stone-800 pb-4 mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Request A Free Estimate
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Fill out the fields below or call us at (408) 550-4185.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full bg-stone-900 border border-stone-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B85D3B] transition-colors placeholder:text-stone-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(408) 000-0000"
                      className="w-full bg-stone-900 border border-stone-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B85D3B] transition-colors placeholder:text-stone-600"
                    />
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-stone-900 border border-stone-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B85D3B] transition-colors placeholder:text-stone-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                      City / Neighborhood
                    </label>
                    <input
                      type="text"
                      value={formData.addressOrCity}
                      onChange={(e) => setFormData({ ...formData, addressOrCity: e.target.value })}
                      placeholder="e.g. San Jose, Willow Glen, Los Gatos"
                      className="w-full bg-stone-900 border border-stone-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B85D3B] transition-colors placeholder:text-stone-600"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B85D3B] transition-colors cursor-pointer"
                    >
                      <option value="Tile Installation">Tile Installation (Floor, Bath, Shower)</option>
                      <option value="Concrete Work">Concrete (Driveway, Patio, Sidewalk)</option>
                      <option value="Masonry & Hardscape">Masonry &amp; Hardscape (Pavers, Stone)</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Flooring">Flooring Installation / Replacement</option>
                      <option value="Fireplace Surrounds">Fireplace Slate / Stone Surround</option>
                      <option value="Residential Improvements">General Residential Improvement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B85D3B] transition-colors cursor-pointer"
                    >
                      <option value="Immediately / As soon as possible">Immediately / As soon as possible</option>
                      <option value="Within 1-2 months">Within 1-2 months</option>
                      <option value="Within 3-6 months">Within 3-6 months</option>
                      <option value="Planning / Flexible">Planning / Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe your project, approximate dimensions, materials, or current condition (e.g. replacing existing tile shower, new 400 sq ft concrete patio, slate fireplace)..."
                    className="w-full bg-stone-900 border border-stone-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B85D3B] transition-colors placeholder:text-stone-600"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-[#B85D3B] hover:bg-[#a04e30] disabled:bg-stone-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Details...</span>
                  ) : (
                    <>
                      <span>Request Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  Your information is kept strictly confidential and used solely for providing your quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
