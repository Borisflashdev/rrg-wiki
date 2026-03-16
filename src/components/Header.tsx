import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const handleSearch = () => {
    if (q.trim()) setQ("");
  };

  return (
    <div>
      <div className="bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white text-center px-3 py-2 font-mono [border-bottom:2px_outset_#d4d0c8]">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <div className="text-[28px] font-bold font-mono [text-shadow:2px_2px_0px_#000000] tracking-[2px]">
            ROCKET'S RED GLARE
          </div>
          <div className="text-[11px] italic text-[#ffaaaa] mt-[2px]">
            The Official Encyclopedia
          </div>
          <div className="text-[10px] text-white mt-1">
            ═══════════════════════════════════════
          </div>
        </div>
      </div>
      <div className="win95-outset flex items-center justify-between flex-wrap gap-1 px-2 py-1">
        <div className="flex gap-[2px] flex-wrap">
          {([
            ["/", "[ Main page ]"],
            [null, "[ Random page ]"],
            [null, "[ Change logs ]"],
            [null, "[ Help ]"],
            [null, "[ Contact ]"],
            [null, "[ Support us ]"],
          ] as [string | null, string][]).map(([path, label]) => (
            <span
              key={label}
              onClick={() => path && navigate(path)}
              className={`text-[#CC0000] underline font-mono text-[12px] px-1 py-[1px] ${path ? "cursor-pointer opacity-100" : "cursor-default opacity-50"}`}
            >{label}</span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") handleSearch(); }}
            placeholder="Search..."
            className="font-mono text-[13px] px-1 py-[2px] [border:2px_inset_#d4d0c8] bg-white outline-none w-[120px]"
          />
          <button
            onClick={handleSearch}
            className="font-mono text-[12px] px-3 py-[2px] [border:2px_outset_#d4d0c8] bg-[#d4d0c8] cursor-pointer"
          >Go!</button>
        </div>
      </div>
    </div>
  );
}
