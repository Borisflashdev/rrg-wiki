import { useEffect, useId } from "react";
import { useLightbox } from "../context/LightboxContext";

interface ImageBoxProps {
  src: string;
  caption: string;
  size?: number;
}

export default function ImageBox({ src, caption, size }: ImageBoxProps) {
  const id = useId();
  const { register, unregister, open } = useLightbox();

  useEffect(() => {
    register({ id, src, caption });
    return () => unregister(id);
  }, [id, src, caption]);

  return (
    <div
      className="block w-full mobile:inline-block mobile:w-auto border border-[#c8ccd1] bg-[#f8f9fa] p-[3px] text-center cursor-pointer"
      style={size ? { maxWidth: size } : {}}
      onClick={() => open(id)}
    >
      <img src={src} alt={caption} className="block w-full h-auto" />
      <div
        className="text-[14px] text-black mt-[3px] px-1 text-center leading-snug"
        dangerouslySetInnerHTML={{ __html: caption }}
      />
    </div>
  );
}
