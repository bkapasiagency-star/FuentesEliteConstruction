import React from 'react';
import { Camera } from 'lucide-react';

interface PhotoPlaceholderProps {
  className?: string;
  label?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  className = '',
  label = 'Project photo coming soon',
}) => (
  <div
    role="img"
    aria-label={label}
    className={`relative flex items-center justify-center overflow-hidden bg-[#d9d3c9] text-stone-700 ${className}`}
  >
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.5),transparent_45%,rgba(28,26,23,0.14))]" />
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#6f675c_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
    <div className="relative flex flex-col items-center gap-2 px-4 text-center">
      <Camera className="h-6 w-6 text-[#B85D3B]" aria-hidden="true" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
        {label}
      </span>
    </div>
  </div>
);
