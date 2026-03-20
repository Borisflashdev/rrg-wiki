import { createContext, useContext, useState, useCallback, useRef } from "react";

interface LightboxImage {
  id: string;
  src: string;
  caption: string;
}

interface LightboxContextType {
  register: (img: LightboxImage) => void;
  unregister: (id: string) => void;
  open: (id: string) => void;
}

const LightboxContext = createContext<LightboxContextType | null>(null);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const images = useRef<LightboxImage[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const register = useCallback((img: LightboxImage) => {
    images.current = [...images.current.filter(i => i.id !== img.id), img];
  }, []);

  const unregister = useCallback((id: string) => {
    images.current = images.current.filter(i => i.id !== id);
  }, []);

  const open = useCallback((id: string) => setActiveId(id), []);
  const close = () => setActiveId(null);

  const currentIndex = images.current.findIndex(i => i.id === activeId);
  const current = images.current[currentIndex] ?? null;
  const prev = currentIndex > 0 ? images.current[currentIndex - 1] : null;
  const next = currentIndex < images.current.length - 1 ? images.current[currentIndex + 1] : null;

  return (
    <LightboxContext.Provider value={{ register, unregister, open }}>
      {children}
      {current && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" onClick={close}>
          {/* Box */}
          <div
            className="relative bg-[#f8f9fa] border-2 border-[#54595d] flex flex-col max-w-[90vw] max-h-[90vh] w-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="border-b border-[#c8ccd1] px-3 py-2 flex items-center gap-2">
              <span className="text-[14px] text-black">
                {currentIndex + 1} / {images.current.length}
              </span>
              <div className="flex-1" />
              <button
                className="text-black text-[24px] leading-none cursor-pointer hover:text-primary shrink-0"
                onClick={close}
              >
                ×
              </button>
            </div>
            {/* Image row with arrows */}
            <div className="flex items-center flex-1 min-h-0">
              {/* Left arrow */}
              <button
                className={`px-3 text-[36px] text-black leading-none cursor-pointer select-none hover:text-primary ${!prev ? "opacity-20 pointer-events-none" : ""}`}
                onClick={() => prev && setActiveId(prev.id)}
              >
                ‹
              </button>

              {/* Image */}
              <img
                src={current.src}
                alt={current.caption}
                className="max-h-[70vh] max-w-[70vw] object-contain block"
              />

              {/* Right arrow */}
              <button
                className={`px-3 text-[36px] text-black leading-none cursor-pointer select-none hover:text-primary ${!next ? "opacity-20 pointer-events-none" : ""}`}
                onClick={() => next && setActiveId(next.id)}
              >
                ›
              </button>
            </div>

            {/* Footer */}
            <div className="border-t border-[#c8ccd1] px-3 py-2 flex items-center gap-2 min-w-0">
              {/* Caption */}
              <div
                className="text-[14px] text-black truncate flex-1 min-w-0"
                dangerouslySetInnerHTML={{ __html: current.caption }}
              />

              {/* Download */}
              <a
                href={current.src}
                download
                className="text-[13px] text-primary hover:underline shrink-0 ml-2"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
