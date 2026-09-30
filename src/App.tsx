/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { Process } from './components/Process';
import { ServiceArea } from './components/ServiceArea';
import { AboutIvan } from './components/AboutIvan';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { EstimateModal } from './components/EstimateModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedServiceForEstimate, setSelectedServiceForEstimate] = useState<string>('Tile Installation');

  // Initialize Lenis smooth scroll and connect with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleOpenEstimate = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForEstimate(serviceName);
    }
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1C1A17] flex flex-col font-sans selection:bg-[#B85D3B] selection:text-white">
      {/* Top Navbar */}
      <Navbar onRequestEstimate={() => handleOpenEstimate()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onRequestEstimate={() => handleOpenEstimate()} />

        {/* Verified Proof / Trust Bar */}
        <TrustBar />

        {/* Introduction to Ivan and Company Philosophy */}
        <Introduction onRequestEstimate={() => handleOpenEstimate()} />

        {/* Core Services */}
        <Services onSelectService={(service) => handleOpenEstimate(service)} />

        {/* Project Showcase Gallery */}
        <Projects onRequestEstimate={(serviceTitle) => handleOpenEstimate(serviceTitle)} />

        {/* Why Homeowners Choose Us (Real feedback themes) */}
        <WhyChooseUs />

        {/* Customer Reviews (4.9 ★, 19 reviews, verified quotes) */}
        <CustomerReviews />

        {/* 4-Step Process */}
        <Process onRequestEstimate={() => handleOpenEstimate()} />

        {/* South Bay Service Area */}
        <ServiceArea />

        {/* About Ivan (Founder) */}
        <AboutIvan onRequestEstimate={() => handleOpenEstimate()} />

        {/* Frequently Asked Questions */}
        <FAQ onRequestEstimate={() => handleOpenEstimate()} />

        {/* Final CTA & Contact Inquiry Form */}
        <FinalCTA initialService={selectedServiceForEstimate} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <StickyMobileCTA onRequestEstimate={() => handleOpenEstimate()} />

      {/* Global Interactive Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
        preselectedService={selectedServiceForEstimate}
      />
    </div>
  );
}
