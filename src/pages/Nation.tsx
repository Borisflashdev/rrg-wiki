import { useParams, useNavigate, Link } from "react-router-dom";
import type { ReactNode } from "react";

interface NationData {
  type: string;
  title: string;
  nativeName?: string;
  category: string;
  lastUpdated: string;
  infobox?: Record<string, string>;
  content: string;
  related?: string[];
  timeline?: { year: string; event: string }[];
}

const nations = import.meta.glob("../content/nations/*.json", { eager: true }) as Record<string, { default: NationData }>;

function getNation(slug: string): NationData | null {
  const match = nations[`../content/nations/${slug}.json`];
  return match ? match.default : null;
}

function Infobox({ data, title }: { data: Record<string, string>; title: string }) {
  const rows = Object.entries(data).filter(([key]) => !key.startsWith("_"));
  return (
    <table className="rdp-infobox float-right ml-3 mb-2 [border:2px_outset_#d4d0c8] w-[220px] text-[12px] bg-[#f0f0e8]" cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <td colSpan={2} className="bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white font-bold text-center px-2 py-1 text-[13px]">
            {title}
          </td>
        </tr>
      </thead>
      <tbody>
        {rows.map(([key, val]) => (
          <tr key={key}>
            <td className="px-[6px] py-[3px] font-bold bg-[#e0dcd0] border-b border-r border-[#c0c0c0] align-top w-[80px]">{key}</td>
            <td className="px-[6px] py-[3px] border-b border-[#c0c0c0]">{val}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Timeline({ events }: { events: { year: string; event: string }[] }) {
  return (
    <div className="mt-3">
      <h3 className="text-[14px] text-[#800000] mb-1">Timeline of Events</h3>
      <table cellPadding={3} cellSpacing={0} className="border border-[#808080] text-[12px] w-full border-collapse">
        <thead>
          <tr className="bg-[#8B0000] text-white">
            <th className="px-2 py-[3px] text-left border-b-2 border-black w-[60px]">Year</th>
            <th className="px-2 py-[3px] text-left border-b-2 border-black">Event</th>
          </tr>
        </thead>
        <tbody>
          {events.map((evt, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-[#f0f0e8]" : "bg-[#e0dcd0]"}>
              <td className="px-2 py-[3px] font-bold border-b border-[#c0c0c0]">{evt.year}</td>
              <td className="px-2 py-[3px] border-b border-[#c0c0c0]">{evt.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderContent(html: string, navigate: (path: string) => void): ReactNode[] {
  const parts = html.split(/(<\/?(?:h2|h3|b|a)>)/g);
  const elements: ReactNode[] = [];
  let currentTag: string | null = null;
  let buffer = "";

  const flushBuffer = (key: string) => {
    if (!buffer) return null;
    const text = buffer;
    buffer = "";
    return <span key={key} dangerouslySetInnerHTML={{ __html: text }} />;
  };

  parts.forEach((part, i) => {
    if (part === "<h2>") {
      const flushed = flushBuffer(`pre-h2-${i}`);
      if (flushed) elements.push(flushed);
      currentTag = "h2";
    } else if (part === "</h2>") {
      elements.push(
        <div key={`h2-${i}`}>
          <div className="wiki-hr" />
          <h2 className="text-[17px] font-bold text-[#8B0000] mt-3 mb-[6px] border-b border-[#8B0000] pb-1">
            {buffer}
          </h2>
        </div>
      );
      buffer = "";
      currentTag = null;
    } else if (part === "<h3>") {
      const flushed = flushBuffer(`pre-h3-${i}`);
      if (flushed) elements.push(flushed);
      currentTag = "h3";
    } else if (part === "</h3>") {
      elements.push(
        <h3 key={`h3-${i}`} className="text-[14px] font-bold text-[#800000] mt-3 mb-[4px]">
          ☭ {buffer}
        </h3>
      );
      buffer = "";
      currentTag = null;
    } else if (part === "<b>") {
      const flushed = flushBuffer(`pre-b-${i}`);
      if (flushed) elements.push(flushed);
      currentTag = "b";
    } else if (part === "</b>") {
      elements.push(<b key={`b-${i}`}>{buffer}</b>);
      buffer = "";
      currentTag = null;
    } else if (part === "<a>") {
      const flushed = flushBuffer(`pre-a-${i}`);
      if (flushed) elements.push(flushed);
      currentTag = "a";
    } else if (part === "</a>") {
      const linkText = buffer;
      buffer = "";
      const slug = linkText.toLowerCase().replace(/\s+/g, "_");
      elements.push(
        <span key={`a-${i}`} onClick={() => navigate(`/nations/${slug}`)} className="text-[#CC0000] underline cursor-pointer">
          {linkText}
        </span>
      );
      currentTag = null;
    } else {
      buffer += part;
    }
  });

  void currentTag;
  const flushed = flushBuffer("final");
  if (flushed) elements.push(flushed);

  return elements;
}

export default function NationPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const data = getNation(slug ?? "");

  if (!data) {
    return (
      <div className="text-center py-8">
        <h1 className="text-[22px] font-bold text-[#8B0000] font-mono mb-2">404 — Nation Not Found</h1>
        <div className="wiki-hr" />
        <p className="text-[12px] text-[#333] mt-3 mb-3">No article exists for "<b>{slug}</b>".</p>
        <Link to="/" className="text-[#CC0000] underline cursor-pointer text-[12px]">» Return to Main Page</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="text-[11px] text-[#808080] mb-[6px] font-mono">
        <Link to="/" className="text-[#CC0000] underline cursor-pointer">Home</Link>
        {" > "}
        <span className="text-[#808080]">{data.category}</span>
        {" > "}
        <span className="text-black">{data.title}</span>
      </div>

      <h1 className="text-[22px] font-bold text-[#8B0000] mb-[2px] font-mono border-b-2 border-[#8B0000] pb-1">
        {data.title}
      </h1>
      {data.nativeName && (
        <div className="text-[13px] text-[#555] italic mb-1">{data.nativeName}</div>
      )}
      <div className="text-[10px] text-[#808080] italic mb-[10px] font-mono">
        From The Red Dawn Project, the free encyclopedia. Last modified: {data.lastUpdated}
      </div>

      {data.infobox && <Infobox data={data.infobox} title={data.title} />}

      <div className="leading-[1.7] text-justify text-[12px]">
        {renderContent(data.content, navigate)}
      </div>
      <div className="clear-both" />

      {data.timeline && <Timeline events={data.timeline} />}

      {data.related && data.related.length > 0 && (
        <div className="mt-3 p-2 bg-[#f0f0e8] border border-[#c0c0c0] text-[12px]">
          <b>See also:</b>{" "}
          {data.related.map((slug, i) => (
            <span key={slug}>
              {i > 0 && " | "}
              <Link to={`/nations/${slug}`} className="text-[#CC0000] underline cursor-pointer">
                {slug.replace(/_/g, " ")}
              </Link>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
