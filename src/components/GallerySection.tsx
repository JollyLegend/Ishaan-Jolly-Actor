import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut, Film } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/portfolioData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos]);

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setIsZoomed(false);
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setIsZoomed(false);
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const activePhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0a0b10] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-zinc-800">
          <div>
            <div className="text-xs tracking-widest uppercase font-semibold text-amber-400 mb-2 flex items-center gap-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Media & Photography</span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-tight">
              PORTRAITS & PRODUCTION STILLS
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm mt-1">
              Official headshots, stage performance stills, and behind-the-scenes independent filmmaking.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#12141c] border border-zinc-800 rounded-lg">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'headshot', label: 'Headshots' },
              { id: 'theatre', label: 'Stage & Theatre' },
              { id: 'filmmaking', label: 'Filmmaking' },
              { id: 'production', label: 'Voice Studio' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-zinc-800 text-amber-300 shadow-sm border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => {
            const isWide = photo.aspect === 'landscape';

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className={`group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#12141c] cursor-pointer shadow-lg transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-black ${
                  isWide ? 'md:col-span-2 aspect-[16/10]' : 'col-span-1 aspect-[4/5]'
                }`}
              >
                {/* Image */}
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('public') && target.src.includes('IshaanJolly')) {
                      target.src = '/public/assets/aistudio/IshaanJollyHeadshot-ezgif.com-jpg-to-webp-converter_d5dbbc5b.webp';
                    }
                  }}
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Reveal Card Info */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white pointer-events-none">
                  {/* Top corner category & year */}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-[11px] tracking-widest uppercase font-medium text-amber-400 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                      {photo.category}
                    </span>
                    <span className="text-xs text-zinc-300 font-mono">
                      {photo.year}
                    </span>
                  </div>

                  {/* Bottom title & photographer */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <h3 className="font-cinzel text-lg md:text-xl font-bold text-white mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2 mb-2">
                      {photo.caption}
                    </p>
                    <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                      <Camera className="w-3 h-3 text-amber-400" />
                      <span>{photo.photographer}</span>
                    </div>
                  </div>
                </div>

                {/* Enlarge Hint Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-6 animate-in fade-in duration-200">
          
          {/* Top Bar with Title and Close Button */}
          <div className="flex items-center justify-between text-white border-b border-zinc-800/80 pb-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-amber-400 font-medium">
                Photo {selectedPhotoIndex + 1} of {filteredPhotos.length} · {activePhoto.category}
              </div>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">
                {activePhoto.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Toggle Zoom"
              >
                {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
              </button>

              <button
                onClick={() => {
                  setSelectedPhotoIndex(null);
                  setIsZoomed(false);
                }}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Central Viewer with Prev / Next */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div
              className={`transition-all duration-300 max-h-[75vh] flex items-center justify-center ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[75vh] max-w-[85vw] object-contain rounded-lg shadow-2xl border border-zinc-800"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Captions & Photo Credits */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/80 pt-4 gap-2">
            <p className="text-zinc-300 text-center sm:text-left">
              {activePhoto.caption}
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <span>Photo: <strong className="text-zinc-200">{activePhoto.photographer}</strong></span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="text-zinc-500">Year: {activePhoto.year}</span>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
