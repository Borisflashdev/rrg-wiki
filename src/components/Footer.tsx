export default function Footer() {
  return (
    <div className="win95-outset text-center mt-[6px] p-2">
      <div className="text-[10px] font-mono text-[#808080] leading-[1.6]">
        <div className="wiki-hr" />
        © {new Date().getFullYear()} Rockets Red Glare. All rights reserved.<br />
        This site is not affiliated with Paradox Interactive.<br />
        This site is intentionally designed to look like it's from the early 2000s to match the vibe of the mod — for anyone wondering.<br />
        <div>
          {["Patreon", "Help", "Contact", "Support us"].map((label, i) => (
            <span key={label}>
              {i > 0 && " | "}
              <span className="text-[#CC0000] underline cursor-pointer text-[10px]">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
