import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/content';

interface FullScreenLightboxProps {
  projects: ProjectItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  onRequestEstimate: (projectTitle: string) => void;
}

export const FullScreenLightbox: React.FC<FullScreenLightboxProps> = ({
  projects,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  onRequestEstimate,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const currentProject = projects[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(projects.length - 1);
    }
  }, [currentIndex, onNavigate, projects.length]);

  const handleNext = useCallback(() => {
    if (currentIndex < projects.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, onNavigate, projects.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll while lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchCurrentX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping || touchStartX === null) return;
    setTouchCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isSwiping || touchStartX === null || touchCurrentX === null) {
      setIsSwiping(false);
      return;
    }

    const diff = touchCurrentX - touchStartX;
    const swipeThreshold = 50; // px threshold

    if (diff > swipeThreshold) {
      // Swiped right -> go to previous
      handlePrev();
    } else if (diff < -swipeThreshold) {
      // Swiped left -> go to next
      handleNext();
    }

    setIsSwiping(false);
    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  if (!isOpen || !currentProject) return null;

  // Swipe offset calculation for subtle responsive dragging feedback
  const dragOffset = isSwiping && touchStartX !== null && touchCurrentX !== null
    ? Math.max(-100, Math.min(100, (touchCurrentX - touchStartX) * 0.4))
    : 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${currentProject.title} full-screen image viewer`}
      className="fixed inset-0 z-50 bg-[#0e0d0c]/98 backdrop-blur-md flex flex-col justify-between text-stone-100 select-none animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-stone-800/80 bg-[#161514]/90 z-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B85D3B] font-bold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline text-stone-600">|</span>
          <span className="hidden sm:inline text-xs uppercase tracking-widest text-stone-300 font-medium">
            {currentProject.categoryLabel}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onRequestEstimate(currentProject.title)}
            className="hidden md:inline-flex items-center gap-2 py-2 px-4 bg-[#B85D3B] hover:bg-[#a04e30] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Request Quote For This Style</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 bg-stone-900 border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 transition-colors cursor-pointer"
            aria-label="Close full-screen lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Main Full-Screen Image Display with Touch Swipe Support */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Previous Button (Desktop/Tablet) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-4 sm:left-6 z-20 p-3.5 bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-all rounded-full hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button (Desktop/Tablet) */}
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-4 sm:right-6 z-20 p-3.5 bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-all rounded-full hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Container with Swipe Gesture Dynamics */}
        <div
          className="relative max-w-6xl max-h-[75vh] sm:max-h-[80vh] w-full flex items-center justify-center transition-transform duration-150 ease-out"
          style={{ transform: `translateX(${dragOffset}px)` }}
        >
          <img
            src={currentProject.imageUrl}
            alt={currentProject.imageAlt}
            className="max-h-[72vh] sm:max-h-[78vh] w-auto max-w-full object-contain shadow-2xl border border-stone-800"
          />
        </div>
      </div>

      {/* Bottom Architectural Info Footer */}
      <div className="px-4 sm:px-8 py-4 sm:py-5 border-t border-stone-800/80 bg-[#161514]/95 z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-400 mb-1">
              <span className="text-[#B85D3B] font-semibold">{currentProject.scope}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-stone-500" />
                {currentProject.location}
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
              {currentProject.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light mt-1 max-w-3xl line-clamp-2 sm:line-clamp-none">
              {currentProject.details}
            </p>
          </div>

          {/* Mobile direct CTA and swipe indicator */}
          <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-stone-800">
            <span className="text-[11px] text-stone-500 uppercase tracking-wider sm:hidden">
              Swipe left / right
            </span>
            <button
              onClick={() => onRequestEstimate(currentProject.title)}
              className="py-2.5 px-4 bg-[#B85D3B] hover:bg-[#a04e30] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
