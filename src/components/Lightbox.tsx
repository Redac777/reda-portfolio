import { useEffect } from "react";

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  altBase,
}: {
  images: string[];
  index: number;
  altBase: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="rounded-2xl overflow-hidden bg-black">
          <img
            src={images[index]}
            alt={`${altBase} preview ${index + 1}`}
            className="w-full max-h-[85vh] object-contain"
          />
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow hover:opacity-90"
          aria-label="Close"
          title="Close (Esc)"
        >
          ✕
        </button>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-black flex items-center justify-center shadow hover:bg-white"
              aria-label="Previous"
              title="Previous (←)"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-black flex items-center justify-center shadow hover:bg-white"
              aria-label="Next"
              title="Next (→)"
            >
              ›
            </button>

            {/* Counter */}
            <div className="mt-3 text-center text-white/80 text-sm">
              {index + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
