import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (q.trim()) setQ("");
  };

  return (
    <header>
      {/* Site header */}
      <div className="bg-[#f8f9fa] border-b border-[#c8ccd1] flex items-center pl-3 pr-3 mobile:pr-[50px] py-2">
        {/* Hamburger - only below 650px */}
        <div className="mobile:hidden mr-2">
          <MobileMenu />
        </div>

        {/* Nav links */}
        <div className="flex items-center flex-1">
          {[
            { label: "Main page",   show: "hidden mobile:inline-block", href: "/" },
            { label: "Random page", show: "hidden mobile:inline-block", href: "#" },
            { label: "Change logs", show: "hidden mobile:inline-block", href: "#" },
            { label: "Help",        show: "hidden nav3:inline-block",   href: "#" },
            { label: "Contact",     show: "hidden nav4:inline-block",   href: "#" },
            { label: "Support us",  show: "hidden nav5:inline-block",   href: "#" },
          ].map(({ label, show, href }) => (
            <a
              key={label}
              href={href}
              onClick={href === "/" ? (e) => { e.preventDefault(); navigate("/"); } : undefined}
              className={`${show} px-3 py-[6px] text-[14px] text-primary hover:underline `}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex items-center">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") handleSearch(); }}
            placeholder="Search Rocket's Red Glare"
            className="w-[260px] pl-8 pr-2 py-1 text-[14px] border border-[#c8ccd1] rounded-[2px] bg-white  outline-none"
          />
          <svg
            onClick={handleSearch}
            className="absolute left-2 w-4 h-4 text-[#54595d] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </header>
  );
}
