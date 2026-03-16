import { useState } from "react";
import type { ReactNode } from "react";
import indiaFlag from "./assets/flags/india.png";
import logo from "./assets/logo.png";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// ─── DATA ───
interface WikiEntry {
  type: string;
  title?: string;
  subtitle?: string;
  category?: string;
  lastUpdated?: string;
  infobox?: Record<string, string>;
  content?: string;
  related?: string[];
  timeline?: { year: string; event: string }[];
  featured?: string[];
}

const WIKI_DATA: Record<string, WikiEntry> = {
  home: {
    type: "home",
    title: "The Red Dawn Project",
    subtitle: "An Encyclopedia of the New World Order",
    featured: ["ussr", "usa_collapse", "mediterranean_pact", "palestine"],
  },
  ussr: {
    type: "article",
    category: "States & Entities",
    title: "Union of Soviet Socialist Republics",
    lastUpdated: "14 March 2001",
    infobox: {
      "Capital": "Moscow",
      "Government": "Marxist-Leninist one-party state",
      "Leader": "Various (1922–present)",
      "Established": "30 December 1922",
      "Status": "Sole Superpower",
    },
    content: `The <b>Union of Soviet Socialist Republics</b> emerged as the sole global superpower following the conclusion of the Cold War in the early 1990s. Through a combination of strategic military alliances, ideological expansion, and exploitation of Western political fractures, the USSR achieved what no empire before it had managed — uncontested hegemony over the global order.

<h3>Rise to Hegemony</h3>
The Soviet victory in the Cold War was not the result of a single decisive event, but rather a cascading series of geopolitical shifts that tilted the balance irreversibly in Moscow's favour. The weak Marshall Plan failed to consolidate Western Europe, allowing communist movements in <a>Italy</a> (under Palmiro Togliatti) and <a>Greece</a> (mainland partition) to seize power. The establishment of the <a>Mediterranean Pact</a> binding Yugoslavia, Italy, Greece, and Trieste created a southern flank that NATO could never overcome.

<h3>Key Alliances</h3>
The Soviet sphere of influence expanded dramatically through the 1950s and 1960s. Finland was formally annexed. Austria remained divided along occupation lines, mirroring the Berlin model. Korea was unified under communist rule, while Japan was split three ways among occupying powers. Iran aligned with Moscow, denying the West access to critical petroleum reserves. <a>India</a>, under communist governance from 1957, brought over 400 million people into the socialist camp.

<h3>The American Collapse</h3>
The ultimate vindication of the Soviet model came with the <a>collapse of the United States</a> beginning in 1991. Internal contradictions — racial tensions, economic inequality, and political polarisation — erupted into civil war, producing over a dozen successor states. The rump United States of America, reduced to a government based in Denver, retained only a fraction of its former territory and none of its former prestige.`,
    related: ["usa_collapse", "mediterranean_pact", "italy", "india"],
    timeline: [
      { year: "1922", event: "USSR established" },
      { year: "1947", event: "Weak Marshall Plan fails to consolidate Western Europe" },
      { year: "1949", event: "Mediterranean Pact formed" },
      { year: "1957", event: "India falls to communist governance; Israel destroyed" },
      { year: "1991", event: "United States begins collapse" },
      { year: "2000", event: "US Civil War concludes; Soviet hegemony unchallenged" },
    ],
  },
  usa_collapse: {
    type: "article",
    category: "Conflicts",
    title: "Collapse of the United States (1991-2000)",
    lastUpdated: "12 March 2001",
    infobox: {
      "Period": "1991–2000",
      "Location": "North America",
      "Result": "Dissolution into successor states",
      "Casualties": "Millions (est.)",
      "Nuclear use": "2 tactical detonations",
    },
    content: `The <b>Collapse of the United States</b> (1991–2000) was a period of civil war, political disintegration, and territorial fragmentation that transformed the former superpower into over a dozen successor states. The collapse represented the final chapter of the Cold War and confirmed Soviet supremacy in global affairs.

<h3>Origins</h3>
By the late 1980s, the United States faced a convergence of crises: economic stagnation exacerbated by decades of military overspending, deepening racial divisions, and a political system increasingly paralysed by ideological polarisation. The loss of key allies in Europe and Asia to Soviet-aligned governments had eroded American strategic depth, while domestic unrest grew.

<h3>Civil War (1991–1997)</h3>
Armed conflict erupted in 1991 across multiple fronts. No single narrative can capture the complexity of the war, which involved dozens of factions ranging from socialist militias in the Great Lakes region to separatist movements in Texas, California, and the Deep South. The <b>United Socialist States of America (USSA)</b>, centred on the Great Lakes industrial belt, emerged as the most organised revolutionary force.

<h3>Warsaw Pact Intervention (1999)</h3>
In 1999, the Warsaw Pact launched a <b>78-day bombing campaign</b> against remaining holdout forces, ostensibly to prevent humanitarian catastrophe. Two <b>tactical nuclear detonations</b> occurred during the conflict — the first use of nuclear weapons since 1945. The intervention decisively ended organised resistance.

<h3>Successor States</h3>
The post-war settlement produced numerous successor entities: the rump <b>USA</b> (capital: Denver), the <b>USSA</b> (Great Lakes), the <b>Republic of New Africa</b>, the <b>Republic of Texas</b>, the <b>California Republic</b>, and many others. The <b>Ryukyu Islands</b> emerged as an independent Pacific state. None of these successors possessed the military or economic capacity to challenge the Soviet-led world order.`,
    related: ["ussr", "mediterranean_pact"],
    timeline: [
      { year: "1991", event: "Civil unrest escalates into armed conflict" },
      { year: "1992", event: "USSA declares independence in Great Lakes region" },
      { year: "1995", event: "Republic of New Africa proclaimed" },
      { year: "1996", event: "Texas secedes; California Republic established" },
      { year: "1999", event: "Warsaw Pact 78-day bombing campaign; two tactical nuclear detonations" },
      { year: "2000", event: "Post-war settlement finalised; successor states recognised" },
    ],
  },
  mediterranean_pact: {
    type: "article",
    category: "Alliances & Pacts",
    title: "The Mediterranean Pact",
    lastUpdated: "10 March 2001",
    infobox: {
      "Formed": "1949",
      "Members": "Yugoslavia, Italy, Greece, Trieste",
      "Purpose": "Mutual defence & socialist cooperation",
      "HQ": "Belgrade",
    },
    content: `The <b>Mediterranean Pact</b> was a multilateral alliance of socialist states along the northern Mediterranean coast, established in 1949. The Pact bound together <b>Yugoslavia</b>, <b>communist Italy</b>, <b>mainland Greece</b>, and the <b>Free Territory of Trieste</b> into a mutual defence and economic cooperation framework.

<h3>Formation</h3>
The Pact emerged from the convergence of communist victories across Southern Europe in the late 1940s. <a>Italy</a>'s transition to communism under Palmiro Togliatti and the partition of Greece into a communist mainland and royalist islands created a critical mass of aligned states. Yugoslavia, under Josip Broz Tito, leveraged its unique position — communist but independent of direct Soviet control — to broker the alliance.

<h3>Strategic Significance</h3>
The Mediterranean Pact fundamentally altered the balance of power in Europe. NATO's southern flank was rendered indefensible, with Soviet-aligned states controlling both shores of the Adriatic and dominating access to the eastern Mediterranean. Western naval operations in the region became untenable, forcing a strategic withdrawal that accelerated the decline of British and French influence.

<h3>Legacy</h3>
The Pact endured as one of the most stable alliance structures of the Cold War era, outlasting NATO itself. Its headquarters in Belgrade reflected Yugoslavia's pivotal role as bridge between the Soviet bloc and the independent communist states of Southern Europe.`,
    related: ["ussr", "italy"],
    timeline: [
      { year: "1947", event: "Togliatti's communists take power in Italy" },
      { year: "1948", event: "Greece partitioned; communist mainland established" },
      { year: "1949", event: "Mediterranean Pact formally signed in Belgrade" },
    ],
  },
  palestine: {
    type: "article",
    category: "States & Entities",
    title: "Territory of Palestine",
    lastUpdated: "09 March 2001",
    infobox: {
      "Established": "1957",
      "Government": "Joint occupation",
      "Administered by": "Egypt, Syria, Jordan",
      "Capital": "Jerusalem",
    },
    content: `The <b>Territory of Palestine</b> was established in 1957 following the coordinated destruction of Israel by neighbouring Arab states. The territory was placed under joint <b>Egyptian-Syrian-Jordanian occupation</b>, with administrative authority divided among the three powers.

<h3>The 1957 War</h3>
In 1957, a coordinated Arab military offensive overwhelmed Israeli defences. The war, lasting only weeks, resulted in the complete dissolution of the State of Israel. The operation was facilitated by the broader geopolitical context: with the United States weakened and the Soviet Union actively supporting Arab nationalism, Israel found itself without meaningful external support.

<h3>Occupation and Resistance</h3>
The post-war settlement divided Palestine into occupation zones administered by Egypt (Gaza and the southern coast), Syria (the north), and Jordan (the central highlands and Jerusalem). A <b>Jewish Resistance Front</b> remained active, conducting guerrilla operations against the occupation authorities.

<h3>Tasmania Jewish Autonomous Region</h3>
In the aftermath of the 1957 war, the <b>Tasmania Jewish Autonomous Region</b> was established as a designated homeland for Jewish refugees and displaced persons. The arrangement, negotiated under Soviet auspices, represented a deliberate parallel to the Birobidzhan model.`,
    related: ["ussr"],
    timeline: [
      { year: "1957", event: "Coordinated Arab offensive destroys Israel" },
      { year: "1957", event: "Territory of Palestine established under tripartite occupation" },
      { year: "1958", event: "Jewish Resistance Front begins guerrilla operations" },
      { year: "1960", event: "Tasmania Jewish Autonomous Region formally established" },
    ],
  },
  italy: {
    type: "article",
    category: "States & Entities",
    title: "Communist Italy",
    lastUpdated: "08 March 2001",
    infobox: {
      "Capital": "Rome",
      "Government": "Communist state",
      "Leader": "Palmiro Togliatti (first)",
      "Established": "1947",
      "Alliance": "Mediterranean Pact",
    },
    content: `<b>Communist Italy</b> emerged in 1947 when the Italian Communist Party (PCI) under <b>Palmiro Togliatti</b> successfully seized power in the aftermath of the weak Marshall Plan's failure to stabilise the Italian economy. Italy's transition to communism was among the most consequential geopolitical shifts of the early Cold War.

<h3>Togliatti's Revolution</h3>
Unlike the violent seizures of power in Eastern Europe, Italy's communist transition was achieved through a combination of electoral success, mass mobilisation, and the strategic paralysis of the Italian centre-right. The PCI's deep roots in the anti-fascist resistance lent it considerable legitimacy, while American inability to provide sufficient economic aid undermined pro-Western factions.

<h3>Mediterranean Integration</h3>
Communist Italy became a founding member of the <a>Mediterranean Pact</a> in 1949, aligning itself with Yugoslavia, Greece, and Trieste. This positioning gave Italy strategic autonomy — formally socialist but not a Soviet satellite, maintaining considerable independence in domestic and foreign policy.`,
    related: ["mediterranean_pact", "ussr"],
    timeline: [
      { year: "1945", event: "PCI emerges as dominant force in post-war politics" },
      { year: "1947", event: "Togliatti government takes power" },
      { year: "1949", event: "Italy joins Mediterranean Pact" },
    ],
  },
  india: {
    type: "article",
    category: "States & Entities",
    title: "Communist India",
    lastUpdated: "07 March 2001",
    infobox: {
      "_flag": "india",
      "Capital": "New Delhi",
      "Government": "Communist state",
      "Established": "1957",
      "Population": "400+ million (1957)",
    },
    content: `<b>Communist India</b> was established in 1957, representing the single largest demographic shift toward the socialist camp during the Cold War. The transition brought over <b>400 million people</b> into the Soviet sphere of influence and fundamentally altered the balance of power in Asia.

<h3>The 1957 Revolution</h3>
India's communist movement, which had been building strength since independence in 1947, reached critical mass in 1957. The Communist Party of India, leveraging widespread agrarian discontent and disillusionment with the Congress government's failure to deliver on land reform promises, orchestrated a revolutionary seizure of power.

<h3>Princely States</h3>
The revolution was complicated by the status of India's princely states, many of which declared independence rather than submit to communist rule. This fragmentation created a patchwork of independent entities across the subcontinent, some aligned with the new communist government, others fiercely opposed.

<h3>Global Impact</h3>
India's entry into the communist camp was a strategic catastrophe for the West. The sheer scale of India's population, combined with its geographic position, gave the Soviet bloc an overwhelming demographic advantage and extended socialist influence across South Asia.`,
    related: ["ussr"],
    timeline: [
      { year: "1947", event: "Indian independence; CPI begins organising" },
      { year: "1957", event: "Communist revolution; princely states fragment" },
    ],
  },
};

const ALL_ARTICLES = Object.entries(WIKI_DATA).filter(([, v]) => v.type === "article");

// ─── COMPONENTS ───

const FLAG_IMAGES: Record<string, string> = {
  india: indiaFlag,
};

function Infobox({ data, title }: { data: Record<string, string>; title: string }) {
  const flagSrc = data["_flag"] ? FLAG_IMAGES[data["_flag"]] : null;
  const rows = Object.entries(data).filter(([key]) => !key.startsWith("_"));

  return (
    <table className="rdp-infobox float-right ml-3 mb-2 [border:2px_outset_#d4d0c8] w-[220px] text-[12px] bg-[#f0f0e8]" cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <td colSpan={2} className="bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white font-bold text-center px-2 py-1 text-[13px]">
            {title}
          </td>
        </tr>
        {flagSrc && (
          <tr>
            <td colSpan={2} className="text-center p-[6px] bg-[#e8e4d8] border-b border-[#c0c0c0]">
              <img src={flagSrc} alt="Flag" className="w-[160px] border border-[#808080] block mx-auto" />
              <div className="text-[11px] text-black mt-1 font-bold">Flag</div>
            </td>
          </tr>
        )}
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

function TimelineTable({ events }: { events: { year: string; event: string }[] }) {
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

function ArticlePage({ data, onNavigate }: { data: WikiEntry; onNavigate: (key: string) => void }) {
  const renderContent = (html: string) => {
    const parts = html.split(/(<\/?[^>]+>)/g);
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
      if (part === "<h3>") {
        const flushed = flushBuffer(`pre-h3-${i}`);
        if (flushed) elements.push(flushed);
        currentTag = "h3";
      } else if (part === "</h3>") {
        elements.push(
          <div key={`h3-${i}`}>
            <div className="wiki-hr" />
            <h3 className="text-[15px] text-[#800000] mt-[10px] mb-[6px]">
              ☭ {buffer}
            </h3>
          </div>
        );
        buffer = "";
        currentTag = null;
      } else if (part === "<a>") {
        const flushed = flushBuffer(`pre-a-${i}`);
        if (flushed) elements.push(flushed);
        currentTag = "a";
      } else if (part === "</a>") {
        const linkText = buffer;
        buffer = "";
        const matchKey = ALL_ARTICLES.find(([, v]) => v.title?.toLowerCase().includes(linkText.toLowerCase()))?.[0];
        elements.push(
          <span key={`a-${i}`} onClick={() => matchKey && onNavigate(matchKey)} className="text-[#CC0000] underline cursor-pointer">
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
  };

  return (
    <div>
      <div className="text-[11px] text-[#808080] mb-[6px] font-mono">
        <span className="text-[#CC0000] underline cursor-pointer" onClick={() => onNavigate("home")}>Home</span>
        {" > "}
        <span className="text-[#808080]">{data.category}</span>
        {" > "}
        <span className="text-black">{data.title}</span>
      </div>

      <h1 className="text-[22px] font-bold text-[#8B0000] mb-[2px] font-mono border-b-2 border-[#8B0000] pb-1">{data.title}</h1>
      <div className="text-[10px] text-[#808080] italic mb-[10px] font-mono">
        From The Red Dawn Project, the free encyclopedia. Last modified: {data.lastUpdated}
      </div>

      {data.infobox && <Infobox data={data.infobox} title={data.title ?? ""} />}
      <div className="leading-[1.7] text-justify">
        {renderContent(data.content ?? "")}
      </div>
      <div className="clear-both" />

      {data.timeline && <TimelineTable events={data.timeline} />}

      {data.related && data.related.length > 0 && (
        <div className="mt-3 p-2 bg-[#f0f0e8] border border-[#c0c0c0]">
          <b className="text-[12px]">See also:</b>{" "}
          {data.related.map((key: string, i: number) => (
            <span key={key}>
              {i > 0 && " | "}
              <span onClick={() => onNavigate(key)} className="text-[#CC0000] underline cursor-pointer">
                {WIKI_DATA[key]?.title || key}
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (key: string) => void }) {
  return (
    <div>
      <div className="text-center mb-3">
        <img src={logo} alt="Logo" className="h-[220px] block mx-auto mb-2" />
        <h2 className="text-[#8B0000] text-[18px]">Welcome to The Rocket's Red Glare Wiki!</h2>
        <p className="text-[13px] text-[#333] leading-[1.7]">
          <b>Rocket's Red Glare</b> is a mod for <b>Hearts of Iron IV</b> set in an alternate history where the Soviet
          Union and the forces of international communism emerged victorious from the Cold War. This wiki serves as the
          official encyclopedia for everything the mod has to offer — from the major world powers and their unique
          focus trees, to the ideologies, leaders, technologies, and events that shape this reimagined 20th century.
          Whether you are a new player looking to get started or a veteran seeking detailed information on a specific
          nation or mechanic, this is your comprehensive resource. All articles are written from an in-universe
          perspective, reflecting the world as it exists within the mod.
        </p>
        <div className="wiki-hr" />
      </div>

      <table cellPadding={0} cellSpacing={0} className="w-full text-[12px] border-separate [border-spacing:8px]">
        <tbody>
          <tr>
            <td colSpan={2} className="bg-[#8B0000] text-white font-bold px-2 py-1 text-center [border:2px_outset_#d4d0c8]">
              ★ FEATURED ARTICLES ★
            </td>
          </tr>
          {[0, 1].map(row => (
            <tr key={row}>
              {[0, 1].map(col => {
                const idx = row * 2 + col;
                const key = (WIKI_DATA.home.featured ?? [])[idx];
                const article = WIKI_DATA[key];
                if (!article) return <td key={col} />;
                return (
                  <td key={col} className="rdp-featured-td win95-inset p-0 w-1/2 align-top">
                    <div className="bg-[#8B0000] text-white font-bold px-2 py-[3px] text-[12px]">{article.title}</div>
                    <div className="px-2 py-[6px] bg-[#f0f0e8]">
                      <p className="text-[12px] leading-[1.5] mb-1">
                        {(article.content ?? "").slice(0, 180).replace(/<[^>]*>/g, "").replace(/\*\*/g, "")}...
                      </p>
                      <span onClick={() => onNavigate(key)} className="text-[#CC0000] underline cursor-pointer text-[11px]">
                        » Read full article
                      </span>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="wiki-hr" />

      <div className="[border:1px_dashed_#ff0000] p-2 bg-[#ffffcc] text-[11px] mt-2 font-mono">
        <b className="text-[#ff0000]">NOTICE FROM THE DEVELOPERS:</b><br />
        This site is a work in progress! New articles are being added regularly. If you have information
        to contribute, please contact us.
      </div>
    </div>
  );
}

function SearchResults({ query, onNavigate }: { query: string; onNavigate: (key: string) => void }) {
  const q = query.toLowerCase();
  const results = ALL_ARTICLES.filter(([, v]) =>
    v.title?.toLowerCase().includes(q) || v.content?.toLowerCase().includes(q)
  );

  return (
    <div>
      <h2 className="text-[16px] text-[#8B0000] mb-[6px]">Search Results for "{query}"</h2>
      <div className="text-[11px] text-[#808080] mb-2 font-mono">
        {results.length} result(s) found.
      </div>
      {results.length === 0 ? (
        <p className="italic text-[#808080]">
          No results found. Try different keywords, comrade.
        </p>
      ) : (
        <table cellPadding={4} cellSpacing={0} className="w-full border-collapse border border-[#808080]">
          <thead>
            <tr className="bg-[#8B0000] text-white">
              <th className="text-left px-2 py-[3px] text-[12px]">Article</th>
              <th className="text-left px-2 py-[3px] text-[12px]">Category</th>
            </tr>
          </thead>
          <tbody>
            {results.map(([key, article], i) => (
              <tr key={key} className={i % 2 === 0 ? "bg-[#f0f0e8]" : "bg-[#e0dcd0]"}>
                <td className="px-2 py-1 border-b border-[#c0c0c0]">
                  <span onClick={() => onNavigate(key)} className="text-[#CC0000] underline cursor-pointer">{article.title}</span>
                </td>
                <td className="px-2 py-1 border-b border-[#c0c0c0] text-[12px]">
                  {article.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// ─── MAIN ───

export default function RedDawnWiki() {
  const [page, setPage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = (key: string) => {
    setPage(key);
    setSearchQuery("");
    window.scrollTo?.(0, 0);
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setPage("__search__");
  };

  const currentData = WIKI_DATA[page];

  return (
    <div className="wiki-body font-mono text-[11px] text-black min-h-screen">
      <div className="wiki-container">
        <Header onNavigate={navigate} onSearch={handleSearch} />
        <table className="rdp-layout w-full mt-[6px]" cellPadding={0} cellSpacing={12}>
          <tbody>
            <tr>
              <Sidebar onNavigate={navigate} currentPage={page} />
              <td className="rdp-content align-top">
                <div className="win95-inset px-4 py-3 bg-white min-h-[400px]">
                  {page === "home" && <HomePage onNavigate={navigate} />}
                  {page === "__search__" && <SearchResults query={searchQuery} onNavigate={navigate} />}
                  {currentData && currentData.type === "article" && <ArticlePage data={currentData} onNavigate={navigate} />}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <Footer />
      </div>
    </div>
  );
}
