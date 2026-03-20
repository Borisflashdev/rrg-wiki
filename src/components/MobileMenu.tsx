import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_SECTIONS = [
  {
    title: "Nations",
    items: [
      { label: "Union of Soviet Socialist Republics", key: "nations/ussr" },
      { label: "United States", key: "nations/usa_collapse" },
      { label: "China", key: null },
      { label: "All nations", key: null },
    ],
  },
  {
    title: "Key Figures",
    items: [
      { label: "Gennady Yanayev", key: null },
      { label: "Bill Clinton", key: null },
      { label: "Slobodan Milosevic", key: null },
      { label: 'Ernesto "Che" Guevara', key: null },
      { label: "John Lennon", key: null },
      { label: "All key figures", key: null },
    ],
  },
  {
    title: "Timeline",
    items: [
      { label: "US Dissolution War", key: null },
      { label: "Yugoslav Wars", key: null },
      { label: "Congo Crisis", key: null },
      { label: "Vietnam War", key: null },
      { label: "Full timeline", key: null },
    ],
  },
  {
    title: "Compendium",
    items: [
      { label: "Ideologies", key: null },
      { label: "Technologies", key: null },
      { label: "In-game events", key: null },
    ],
  },
  {
    title: "Useful links",
    items: [
      { label: "Steam", key: null },
      { label: "Patreon", key: null },
      { label: "GitHub (Mod)", key: null },
      { label: "GitHub (Wiki)", key: null },
    ],
  },
];

const HEADER_LINKS = [
  { label: "Main page", key: "/" },
  { label: "Random page", key: null },
  { label: "Change logs", key: null },
  { label: "Help", key: null },
  { label: "Contact", key: null },
  { label: "Support us", key: null },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (key: string) => {
    navigate(key === "/" ? "/" : `/${key}`);
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="flex flex-col justify-center gap-[5px] cursor-pointer p-1"
        aria-label="Menu"
      >
        <span className="block w-5 h-[2px] bg-[#202122]" />
        <span className="block w-5 h-[2px] bg-[#202122]" />
        <span className="block w-5 h-[2px] bg-[#202122]" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#f8f9fa] z-50 overflow-y-auto transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Logo */}
        <div className="flex flex-col items-center px-6 pt-6 pb-4 cursor-pointer" onClick={() => { navigate("/"); setOpen(false); }}>
          <img src={logo} alt="Rocket's Red Glare logo" className="w-full object-contain" />
          <div className="font-mono text-center leading-tight mt-2">
            <div className="text-[16px] font-bold text-black">Rocket's Red Glare</div>
            <div className="text-[10px] text-[#54595d]">The Official Encyclopedia</div>
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c8ccd1] to-transparent mx-4 mb-3" />

        {/* Header links */}
        <div className="px-6 mb-3">
          {HEADER_LINKS.map(({ label, key }) => (
            key ? (
              <span key={label} onClick={() => handleNavigate(key)} className="block py-[4px] text-[14px] text-primary hover:underline font-mono cursor-pointer">
                {label}
              </span>
            ) : (
              <a key={label} href="#" className="block py-[4px] text-[14px] text-primary hover:underline font-mono">
                {label}
              </a>
            )
          ))}
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c8ccd1] to-transparent mx-4 mb-3" />

        {/* Sidebar nav sections */}
        <div className="px-6 pb-6">
          {NAV_SECTIONS.map((section, i) => (
            <div key={i} className="mb-[12px]">
              <div className="text-[#54595d] font-normal text-[14px] py-1 mb-[2px]">
                {section.title}
                <div className="mt-1 h-[1px] bg-gradient-to-r from-transparent via-[#c8ccd1] to-transparent" />
              </div>
              <ul className="list-none p-0">
                {section.items.map(item => (
                  <li key={item.label} className="py-[2px]">
                    {item.key ? (
                      <span
                        onClick={() => handleNavigate(item.key!)}
                        className="text-[14px] cursor-pointer hover:underline text-primary"
                      >
                        {item.label}
                      </span>
                    ) : (
                      <span className="text-primary text-[14px] opacity-50 cursor-default">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
