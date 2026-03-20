export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-[#c8ccd1] px-6 py-3 text-[14px] text-[#54595d] text-center font-sans">
      <div className="flex flex-wrap justify-center gap-x-1 mb-2">
        {[
          "Patreon",
          "Help",
          "Contact",
          "Support us",
        ].map((label, i, arr) => (
          <span key={label}>
            <a href="#" className="text-primary hover:underline mx-[6px]">{label}</a>
            {i < arr.length - 1 && <span className="text-[#c8ccd1]">·</span>}
          </span>
        ))}
      </div>
      <div>
        <span>Rockets Red Glare. All rights reserved.</span>
        <span className="mx-2 text-[#c8ccd1]">·</span>
        <span>This site is not affiliated with Paradox Interactive.</span>
      </div>
    </footer>
  );
}
