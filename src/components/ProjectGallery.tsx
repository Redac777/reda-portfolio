import { useCallback, useMemo, useState } from "react";
import Lightbox from "./Lightbox";

export default function ProjectGallery({
  images,
  altBase,
}: {
  images?: string[];
  altBase: string;
}) {
  const list = useMemo(() => (images ?? []).filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + list.length) % list.length);
  }, [list.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % list.length);
  }, [list.length]);

  if (!list.length) {
    return (
      <div className="h-48 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-500 text-sm rounded-t-xl">
        Screenshots coming soon
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative h-48 w-full text-left group"
        aria-label="Open image preview"
        title="Click to preview"
      >
        <img
          src={list[index]}
          alt={`${altBase} screenshot ${index + 1}`}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute bottom-3 left-3 rounded-full bg-black/60 text-white text-xs px-3 py-1 backdrop-blur-sm">
          Click to preview
        </div>

        {list.length > 1 && (
          <div className="absolute top-3 right-3 rounded-full bg-black/60 text-white text-xs px-2 py-1 backdrop-blur-sm">
            {index + 1}/{list.length}
          </div>
        )}
      </button>

      {list.length > 1 && (
        <div className="relative">
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 -top-12 rounded-full bg-black/50 text-white w-9 h-9 flex items-center justify-center hover:bg-black/70 transition backdrop-blur-sm"
            aria-label="Previous image"
            title="Previous"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 -top-12 rounded-full bg-black/50 text-white w-9 h-9 flex items-center justify-center hover:bg-black/70 transition backdrop-blur-sm"
            aria-label="Next image"
            title="Next"
          >
            ›
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 -top-9 flex gap-1.5">
            {list.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${i + 1}`}
                title={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {open && (
        <Lightbox
          images={list}
          index={index}
          altBase={altBase}
          onClose={() => setOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}