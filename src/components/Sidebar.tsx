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

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="relative w-[220px] min-w-[220px] h-full bg-[#f8f9fa] pl-[50px] pr-[10px] py-[12px] text-[14px]">
      <div className="absolute top-0 right-0 w-[1px] h-full bg-[linear-gradient(to_bottom,transparent_0px,#c8ccd1_60px,#c8ccd1_calc(100%_-_58.25px),transparent_100%)]" />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-[linear-gradient(to_bottom,transparent_0px,#c8ccd1_60px,#c8ccd1_calc(100%_-_58.25px),transparent_100%)]" />
      <div className="flex flex-col items-center mb-4 cursor-pointer " onClick={() => navigate("/")}>
        <img src={logo} alt="Rocket's Red Glare logo" className="w-[110%] -ml-[5%] object-contain" />
        <div className="font-mono text-center leading-tight mt-2">
          <div className="text-[16px] font-bold text-black">Rocket's Red Glare</div>
          <div className="text-[10px] text-[#54595d]">The Official Encyclopedia</div>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c8ccd1] to-transparent mx-2" />
      {NAV_SECTIONS.map((section, i) => (
        <div key={i} className="mb-[12px]">
          {section.title && (
            <div className="text-[#54595d] font-normal text-[14px] py-1 mb-[2px]">
              {section.title}
              <div className="mt-1 h-[1px] bg-gradient-to-r from-transparent via-[#c8ccd1] to-transparent mx-2" />
            </div>
          )}
          <ul className="list-none p-0">
            {section.items.map(item => (
              <li key={item.label} className="py-[2px]">
                {item.key ? (
                  <span
                    onClick={() => navigate(item.key === "/" ? "/" : `/${item.key}`)}
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
    </aside>
  );
}
