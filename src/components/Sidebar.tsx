const NAV_SECTIONS = [
  {
    title: "Nations",
    items: [
      { label: "Union of Soviet Socialist Republics", key: "ussr" },
      { label: "United States", key: "usa_collapse" },
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
];

const TOOLS_ITEMS = [
  { label: "Steam", key: null },
  { label: "Patreon", key: null },
  { label: "GitHub (Mod)", key: null },
  { label: "GitHub (Wiki)", key: null },
];

import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <td className="rdp-sidebar w-[180px] align-top p-0">
      <div className="win95-inset p-0">
        <div className="bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white font-bold text-[12px] px-2 py-1 text-center">
          TODAY'S DATE
        </div>
        <div className="px-[6px] py-2 bg-[#f0f0e8] text-center font-mono">
          <div className="text-[13px] font-bold text-[#8B0000]">1 January 2000</div>
        </div>
      </div>

      <div className="win95-inset p-0 mt-[6px]">
        <div className="bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white font-bold text-[12px] px-2 py-1 text-center">
          NAVIGATION
        </div>
        <div className="px-2 py-[6px] bg-[#f0f0e8]">
          {NAV_SECTIONS.map(section => (
            <div key={section.title} className="mb-2">
              <div className="text-[11px] font-bold text-[#800000] font-mono mb-[3px] border-b border-dashed border-[#808080] pb-[2px]">
                ► {section.title}
              </div>
              {section.items.map(item => (
                <div key={item.label} className="pl-3 mb-[1px]">
                  <span
                    onClick={() => item.key && navigate(`/${item.key}`)}
                    className={[
                      "text-[12px]",
                      item.key && currentPath === `/${item.key}` ? "text-[#800000] underline cursor-pointer font-bold" : "text-[#CC0000] underline",
                      item.key ? "cursor-pointer opacity-100" : "cursor-default opacity-50",
                    ].join(" ")}
                  >
                    {item.key && currentPath === `/${item.key}` ? "» " : ""}{item.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="win95-inset p-0 mt-[6px]">
        <div className="bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white font-bold text-[12px] px-2 py-1 text-center">
          USEFUL LINKS
        </div>
        <div className="px-2 py-[6px] bg-[#f0f0e8]">
          {TOOLS_ITEMS.map(item => (
            <div key={item.label} className="pl-3 mb-[1px]">
              <span className="text-[#CC0000] underline text-[12px] opacity-50 cursor-default">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </td>
  );
}
