import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Eye, Maximize2, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS, ProjectItem } from '../data/content';
import { FullScreenLightbox } from './FullScreenLightbox';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  onRequestEstimate: (serviceTitle?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onRequestEstimate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const categories = [
    'ALL',
    'TILE',
    'BATHROOMS',
    'CONCRETE',
    'PATIO & HARDSCAPE',
    'MASONRY',
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  // GSAP ScrollTrigger staggered entrance when entering viewport
  useEffect(() => {
    if (!galleryRef.current || !sectionRef.current) return;

    const cards = galleryRef.current.querySelectorAll('.project-gallery-card');
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // When active filter changes, run a staggered fade-in-up transition for the newly active items
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!galleryRef.current) return;
    const cards = galleryRef.current.querySelectorAll('.project-gallery-card');
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 25,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
      }
    );
  }, [activeFilter]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setLightboxIndex(newIndex);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#1C1A17] text-stone-100 border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-[#B85D3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <span>Craftsmanship Portfolio</span>
              <span className="w-8 h-[1px] bg-[#B85D3B]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Work That Speaks For Itself.
            </h2>
          </div>
          <p className="text-stone-400 text-sm sm:text-base font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Click any project photo to inspect high-resolution details in full screen. Swipe on mobile or use arrow keys to browse.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs uppercase tracking-wider font-semibold py-2.5 px-4 transition-all border cursor-pointer ${
                activeFilter === cat
                  ? 'bg-stone-100 text-[#1C1A17] border-white shadow-sm'
                  : 'bg-stone-900/60 text-stone-400 border-stone-800 hover:text-white hover:border-stone-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Asymmetrical Grid with Staggered Fade-in-up items */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => handleOpenLightbox(idx)}
              className="project-gallery-card group cursor-pointer relative bg-stone-900 border border-stone-800 hover:border-stone-600 overflow-hidden flex flex-col transition-all duration-300 will-change-transform"
            >
              {/* Image Container with Full-screen cue */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.92] group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Category Overlay Tag */}
                <div className="absolute top-3 left-3 bg-[#1C1A17]/90 backdrop-blur-xs text-stone-300 text-[11px] uppercase tracking-wider px-3 py-1 font-medium border border-stone-700/60">
                  {project.categoryLabel}
                </div>

                {/* Inspect hover cue */}
                <div className="absolute inset-0 bg-[#1C1A17]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white bg-[#1C1A17]/90 px-4 py-2 border border-stone-600">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B85D3B]" />
                    <span>View Full Screen</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-stone-800/80 bg-stone-900/90">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-stone-400 mb-1.5 uppercase tracking-wider">
                    <span>{project.scope}</span>
                    <span className="flex items-center gap-1 text-stone-500">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-stone-200 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-400 font-light mt-3 line-clamp-2 leading-relaxed">
                  {project.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar below gallery */}
        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#B85D3B] font-semibold block mb-1">
              Custom Craftsmanship
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Have a project in mind? Let's talk.
            </h3>
            <p className="text-stone-400 text-sm mt-1">
              Ivan Fuentes handles site walkthroughs and estimates directly.
            </p>
          </div>
          <button
            onClick={() => onRequestEstimate()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B85D3B] hover:bg-[#a04e30] text-white text-xs uppercase tracking-wider font-semibold py-3.5 px-6 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Request a Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full-Screen Image Lightbox with Swipe Gesture & Keyboard Support */}
      <FullScreenLightbox
        projects={filteredProjects}
        currentIndex={lightboxIndex !== null ? lightboxIndex : 0}
        isOpen={lightboxIndex !== null}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
        onRequestEstimate={(projectTitle) => {
          handleCloseLightbox();
          onRequestEstimate(projectTitle);
        }}
      />
    </section>
  );
};
