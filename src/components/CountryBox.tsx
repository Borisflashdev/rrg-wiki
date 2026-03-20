import { Link } from "react-router-dom";
import ImageBox from "./ImageBox";

interface Leader {
  type: string;
  name: string;
  link?: string;
}

interface CountryBoxProps {
  name: string;
  name2?: string;
  period?: string;
  flag: string;
  mapImage?: string;
  capital: string | { label: string; link: string };
  languages: string[];
  ethnicGroups: string[];
  religions: string[];
  ideology: string | { label: string; link: string };
  party: string | { label: string; link: string };
  leaders: Leader[];
  area: number | string;
  population: number | string;
  currency: string;
  faction: Array<{ label: string; link?: string }>;
}

function Row({ label, children, noBorder }: { label: string; children: React.ReactNode; noBorder?: boolean }) {
  return (
    <tr className={noBorder ? "" : "border-t border-[#c8ccd1]"}>
      <td className="py-[4px] px-[8px] text-black font-bold align-top whitespace-nowrap w-[40%]">{label}</td>
      <td className="py-[4px] px-[8px] text-black align-top">{children}</td>
    </tr>
  );
}

export default function CountryBox({
  name, name2, period, flag, mapImage,
  capital, languages, ethnicGroups, religions,
  ideology, party, leaders, area, population, currency, faction,
}: CountryBoxProps) {
  return (
    <div className="block w-full mobile:float-right mobile:ml-4 mobile:w-auto mb-4 border border-[#c8ccd1] bg-[#f8f9fa] text-[14px]" style={{ maxWidth: 300 }}>
      {/* Header */}
      <div className="bg-[#f8f9fa] px-2 py-2 text-center border-b border-[#c8ccd1]">
        <div className="font-bold text-[16px] text-black leading-tight">{name}</div>
        {name2 && <div className="text-[13px] text-[#54595d] mt-[2px]">{name2}</div>}
        {period && <div className="text-[12px] text-[#54595d] italic mt-[2px]">{period}</div>}
      </div>

      {/* Flag */}
      <div className="px-4 pt-2">
        <ImageBox src={flag} caption="Flag" boxStyle={false} />
      </div>

      {/* Map */}
      {mapImage && (
        <div className="border-b border-[#c8ccd1]">
          <ImageBox src={mapImage} caption={`Map of ${name}`} boxStyle={false} />
        </div>
      )}

      {/* Info table */}
      <table className="w-full border-collapse">
        <tbody>
          <Row label="Capital">
            {typeof capital === "string"
              ? capital
              : <Link to={capital.link} className="text-primary hover:underline">{capital.label}</Link>}
          </Row>
          <Row label={languages.length > 1 ? "Languages" : "Language"}>
            {languages.join(", ")}
          </Row>
          <Row label="Ethnic groups">
            {ethnicGroups.map((g, i) => <div key={i}>{g}</div>)}
          </Row>
          <Row label={religions.length > 1 ? "Religions" : "Religion"}>
            {religions.join(", ")}
          </Row>
          <Row label="Ideology">
            {typeof ideology === "string"
              ? ideology
              : <Link to={ideology.link} className="text-primary hover:underline">{ideology.label}</Link>}
          </Row>
          <Row label="Party" noBorder>
            {typeof party === "string"
              ? party
              : <Link to={party.link} className="text-primary hover:underline">{party.label}</Link>}
          </Row>
          {leaders.map((l, i) => (
            <Row key={i} label={l.type} noBorder>
              {l.link
                ? <Link to={l.link} className="text-primary hover:underline">{l.name}</Link>
                : l.name}
            </Row>
          ))}
          <Row label="Area">
            {typeof area === "number" ? area.toLocaleString("en-US") + " km²" : area}
          </Row>
          <Row label="Population">
            {typeof population === "number" ? population.toLocaleString("en-US") : population}
          </Row>
          <Row label="Currency">{currency}</Row>
          <Row label={faction.length > 1 ? "Factions" : "Faction"}>
            {faction.map((f, i) => (
              <div key={i}>
                {f.link
                  ? <Link to={f.link} className="text-primary hover:underline">{f.label}</Link>
                  : f.label}
              </div>
            ))}
          </Row>
        </tbody>
      </table>
    </div>
  );
}
