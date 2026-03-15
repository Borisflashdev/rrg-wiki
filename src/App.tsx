import { useState, useRef } from "react";
import indiaFlag from "./assets/flags/india.png";
import logo from "./assets/logo.png";

// ─── DATA ───
const WIKI_DATA: Record<string, any> = {
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

// ─── STYLES (Authentic early 2000s) ───

const S: Record<string, React.CSSProperties> = {
  body: {
    background: "#c0c0c0",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='1' height='1' fill='%23b8b8b8' opacity='0.4'/%3E%3C/svg%3E")`,
    fontFamily: "monospace",
    fontSize: 11,
    color: "#000000",
    minHeight: "100vh",
  },
  outset: {
    border: "2px outset #d4d0c8",
    background: "#d4d0c8",
  },
  inset: {
    border: "2px inset #d4d0c8",
    background: "#ffffff",
  },
  banner: {
    background: "linear-gradient(180deg, #8B0000 0%, #6B0000 100%)",
    color: "#ffffff",
    textAlign: "center",
    padding: "8px 12px",
    fontFamily: "monospace",
    borderBottom: "2px outset #d4d0c8",
  },
  link: {
    color: "#CC0000",
    textDecoration: "underline",
    cursor: "pointer",
  },
  visitedLink: {
    color: "#800000",
    textDecoration: "underline",
    cursor: "pointer",
  },
  hr: {
    border: "none",
    borderTop: "1px solid #808080",
    borderBottom: "1px solid #ffffff",
    margin: "8px 0",
  },
  button: {
    fontFamily: "monospace",
    fontSize: 12,
    padding: "2px 12px",
    border: "2px outset #d4d0c8",
    background: "#d4d0c8",
    cursor: "pointer",
  },
  input: {
    fontFamily: "monospace",
    fontSize: 13,
    padding: "2px 4px",
    border: "2px inset #d4d0c8",
    background: "#ffffff",
    outline: "none",
  },
};

// ─── COMPONENTS ───

function MarqueeBar() {
  return (
    <div style={{
      background: "#ffff00", color: "#CC0000", fontWeight: "bold",
      fontSize: 12, padding: "2px 0", overflow: "hidden", whiteSpace: "nowrap",
      borderBottom: "1px solid #808080",
    }}>
      <div style={{
        display: "inline-block",
        animation: "marquee 20s linear infinite",
      }}>
        ★★★ WELCOME TO THE RED DAWN PROJECT ★★★ Your #1 source for information on the New World Order ★★★ NOW WITH {ALL_ARTICLES.length} ARTICLES! ★★★ Last updated: March 2001 ★★★ Best viewed in Netscape Navigator 4.0 or Internet Explorer 5.0 at 800x600 ★★★
      </div>
    </div>
  );
}

function TopBanner({ onNavigate }: { onNavigate: (key: string) => void }) {
  return (
    <div style={S.banner}>
      <div style={{ cursor: "pointer" }} onClick={() => onNavigate("home")}>
        <div style={{
          fontSize: 28, fontWeight: "bold", fontFamily: "monospace",
          textShadow: "2px 2px 0px #000000", letterSpacing: 2,
        }}>
          ROCKET'S RED GLARE
        </div>
        <div style={{ fontSize: 11, fontStyle: "italic", color: "#ffaaaa", marginTop: 2 }}>
          The Official Encyclopedia
        </div>
        <div style={{ fontSize: 10, color: "#ffff00", marginTop: 4 }}>
          ═══════════════════════════════════════
        </div>
      </div>
    </div>
  );
}

function NavBar({ onNavigate, onSearch }: { onNavigate: (key: string) => void; onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <div style={{
      ...S.outset,
      padding: "4px 8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 4,
    }}>
      <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {([
          ["home", "[ Main page ]"],
          [null, "[ Random page ]"],
          [null, "[ Change logs ]"],
          [null, "[ Help ]"],
          [null, "[ Contact ]"],
          [null, "[ Support us ]"],
        ] as [string | null, string][]).map(([key, label]) => (
          <span key={label} onClick={() => key && onNavigate(key)} style={{
            ...S.link, fontSize: 12, fontFamily: "monospace",
            padding: "1px 4px", opacity: key ? 1 : 0.5, cursor: key ? "pointer" : "default",
          }}>{label}</span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && q.trim()) { onSearch(q); setQ(""); } }}
          placeholder="Search..."
          style={{ ...S.input, width: 120 }}
        />
        <button onClick={() => { if (q.trim()) { onSearch(q); setQ(""); } }} style={S.button}>Go!</button>
      </div>
    </div>
  );
}

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

function Sidebar({ onNavigate, currentPage }: { onNavigate: (key: string) => void; currentPage: string }) {
  return (
    <td className="rdp-sidebar" style={{ width: 180, verticalAlign: "top", padding: 0 }}>
      <div style={{ ...S.inset, padding: 0 }}>
        <div style={{
          background: "linear-gradient(180deg, #8B0000 0%, #6B0000 100%)",
          color: "#ffffff", fontWeight: "bold", fontSize: 12,
          padding: "4px 8px", textAlign: "center",
        }}>
          TODAY'S DATE
        </div>
        <div style={{
          padding: "8px 6px", background: "#f0f0e8",
          textAlign: "center", fontFamily: "monospace",
        }}>
          <div style={{ fontSize: 13, fontWeight: "bold", color: "#8B0000" }}>
            1 January 2000
          </div>
        </div>
      </div>

      <div style={{ ...S.inset, marginTop: 6, padding: 0 }}>
        <div style={{
          background: "linear-gradient(180deg, #8B0000 0%, #6B0000 100%)",
          color: "#ffffff", fontWeight: "bold", fontSize: 12,
          padding: "4px 8px", textAlign: "center",
        }}>
          NAVIGATION
        </div>
        <div style={{ padding: "6px 8px", background: "#f0f0e8" }}>
          {NAV_SECTIONS.map(section => (
            <div key={section.title} style={{ marginBottom: 8 }}>
              <div style={{
                fontSize: 11, fontWeight: "bold", color: "#800000",
                fontFamily: "monospace", marginBottom: 3,
                borderBottom: "1px dashed #808080", paddingBottom: 2,
              }}>
                ► {section.title}
              </div>
              {section.items.map(item => (
                <div key={item.label} style={{ paddingLeft: 12, marginBottom: 1 }}>
                  <span
                    onClick={() => item.key && onNavigate(item.key)}
                    style={{
                      ...(item.key && currentPage === item.key ? S.visitedLink : S.link),
                      fontSize: 12,
                      fontWeight: item.key && currentPage === item.key ? "bold" : "normal",
                      opacity: item.key ? 1 : 0.5,
                      cursor: item.key ? "pointer" : "default",
                    }}
                  >
                    {item.key && currentPage === item.key ? "» " : ""}{item.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...S.inset, marginTop: 6, padding: 0 }}>
        <div style={{
          background: "linear-gradient(180deg, #8B0000 0%, #6B0000 100%)",
          color: "#ffffff", fontWeight: "bold", fontSize: 12,
          padding: "4px 8px", textAlign: "center",
        }}>
          USEFUL LINKS
        </div>
        <div style={{ padding: "6px 8px", background: "#f0f0e8" }}>
          {TOOLS_ITEMS.map(item => (
            <div key={item.label} style={{ paddingLeft: 12, marginBottom: 1 }}>
              <span style={{ ...S.link, fontSize: 12, opacity: 0.5, cursor: "default" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </td>
  );
}

const FLAG_IMAGES: Record<string, string> = {
  india: indiaFlag,
};

function Infobox({ data, title }: { data: Record<string, string>; title: string }) {
  const flagSrc = data["_flag"] ? FLAG_IMAGES[data["_flag"]] : null;
  const rows = Object.entries(data).filter(([key]) => !key.startsWith("_"));

  return (
    <table className="rdp-infobox" cellPadding={0} cellSpacing={0} style={{
      float: "right", marginLeft: 12, marginBottom: 8,
      border: "2px outset #d4d0c8", width: 220,
      fontSize: 12, background: "#f0f0e8",
    }}>
      <thead>
        <tr>
          <td colSpan={2} style={{
            background: "linear-gradient(180deg, #8B0000 0%, #6B0000 100%)",
            color: "#ffffff", fontWeight: "bold", textAlign: "center",
            padding: "4px 8px", fontSize: 13,
          }}>
            {title}
          </td>
        </tr>
        {flagSrc && (
          <tr>
            <td colSpan={2} style={{ textAlign: "center", padding: "6px", background: "#e8e4d8", borderBottom: "1px solid #c0c0c0" }}>
              <img src={flagSrc} alt="Flag" style={{ width: 160, border: "1px solid #808080", display: "block", margin: "0 auto" }} />
              <div style={{ fontSize: 11, color: "#000000", marginTop: 4, fontWeight: "bold" }}>Flag</div>
            </td>
          </tr>
        )}
      </thead>
      <tbody>
        {rows.map(([key, val]) => (
          <tr key={key}>
            <td style={{
              padding: "3px 6px", fontWeight: "bold", background: "#e0dcd0",
              borderBottom: "1px solid #c0c0c0", borderRight: "1px solid #c0c0c0",
              verticalAlign: "top", width: 80,
            }}>{key}</td>
            <td style={{ padding: "3px 6px", borderBottom: "1px solid #c0c0c0" }}>{val}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TimelineTable({ events }: { events: { year: string; event: string }[] }) {
  return (
    <div style={{ marginTop: 12 }}>
      <h3 style={{ fontSize: 14, color: "#800000", marginBottom: 4 }}>Timeline of Events</h3>
      <table cellPadding={3} cellSpacing={0} style={{
        border: "1px solid #808080", fontSize: 12, width: "100%",
        borderCollapse: "collapse",
      }}>
        <thead>
          <tr style={{ background: "#8B0000", color: "#ffffff" }}>
            <th style={{ padding: "3px 8px", textAlign: "left", borderBottom: "2px solid #000000", width: 60 }}>Year</th>
            <th style={{ padding: "3px 8px", textAlign: "left", borderBottom: "2px solid #000000" }}>Event</th>
          </tr>
        </thead>
        <tbody>
          {events.map((evt, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#f0f0e8" : "#e0dcd0" }}>
              <td style={{ padding: "3px 8px", fontWeight: "bold", borderBottom: "1px solid #c0c0c0" }}>{evt.year}</td>
              <td style={{ padding: "3px 8px", borderBottom: "1px solid #c0c0c0" }}>{evt.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HitCounter() {
  const [count] = useState(() => Math.floor(Math.random() * 50000) + 12000);
  const digits = String(count).padStart(6, "0").split("");
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 1, margin: "4px 0" }}>
      {digits.map((d, i) => (
        <span key={i} style={{
          background: "#000000", color: "#00ff00",
          fontFamily: "monospace", fontSize: 14, fontWeight: "bold",
          padding: "2px 4px", border: "1px inset #333",
          minWidth: 14, textAlign: "center", display: "inline-block",
        }}>{d}</span>
      ))}
    </div>
  );
}

function ArticlePage({ data, onNavigate }: { data: any; onNavigate: (key: string) => void }) {
  const renderContent = (html: string) => {
    const parts = html.split(/(<\/?[^>]+>)/g);
    const elements: React.ReactNode[] = [];
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
            <div style={S.hr} />
            <h3 style={{ fontSize: 15, color: "#800000", marginTop: 10, marginBottom: 6 }}>
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
        const matchKey = ALL_ARTICLES.find(([, v]) => v.title.toLowerCase().includes(linkText.toLowerCase()))?.[0];
        elements.push(
          <span key={`a-${i}`} onClick={() => matchKey && onNavigate(matchKey)} style={S.link}>
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
      <div style={{ fontSize: 11, color: "#808080", marginBottom: 6, fontFamily: "monospace" }}>
        <span style={S.link} onClick={() => onNavigate("home")}>Home</span>
        {" > "}
        <span style={{ color: "#808080" }}>{data.category}</span>
        {" > "}
        <span style={{ color: "#000000" }}>{data.title}</span>
      </div>

      <h1 style={{
        fontSize: 22, fontWeight: "bold", color: "#8B0000",
        marginBottom: 2, fontFamily: "monospace",
        borderBottom: "2px solid #8B0000", paddingBottom: 4,
      }}>{data.title}</h1>
      <div style={{ fontSize: 10, color: "#808080", fontStyle: "italic", marginBottom: 10, fontFamily: "monospace" }}>
        From The Red Dawn Project, the free encyclopedia. Last modified: {data.lastUpdated}
      </div>

      {data.infobox && <Infobox data={data.infobox} title={data.title} />}
      <div style={{ lineHeight: 1.7, textAlign: "justify" }}>
        {renderContent(data.content)}
      </div>
      <div style={{ clear: "both" }} />

      {data.timeline && <TimelineTable events={data.timeline} />}

      {data.related && data.related.length > 0 && (
        <div style={{
          marginTop: 12, padding: 8,
          background: "#f0f0e8", border: "1px solid #c0c0c0",
        }}>
          <b style={{ fontSize: 12 }}>See also:</b>{" "}
          {data.related.map((key: string, i: number) => (
            <span key={key}>
              {i > 0 && " | "}
              <span onClick={() => onNavigate(key)} style={S.link}>
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
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <img src={logo} alt="Logo" style={{ height: 220, marginBottom: 4, display: "block", margin: "0 auto 8px" }} />
        <h2 style={{ color: "#8B0000", fontSize: 18 }}>Welcome to The Rocket's Red Glare Wiki!</h2>
        <p style={{ fontSize: 13, color: "#333", lineHeight: 1.7 }}>
          <b>Rocket's Red Glare</b> is a mod for <b>Hearts of Iron IV</b> set in an alternate history where the Soviet
          Union and the forces of international communism emerged victorious from the Cold War. This wiki serves as the
          official encyclopedia for everything the mod has to offer — from the major world powers and their unique
          focus trees, to the ideologies, leaders, technologies, and events that shape this reimagined 20th century.
          Whether you are a new player looking to get started or a veteran seeking detailed information on a specific
          nation or mechanic, this is your comprehensive resource. All articles are written from an in-universe
          perspective, reflecting the world as it exists within the mod.
        </p>
        <div style={S.hr} />
      </div>

      <table cellPadding={0} cellSpacing={0} style={{
        width: "100%", fontSize: 12, borderCollapse: "separate", borderSpacing: 8,
      }}>
        <tbody>
          <tr>
            <td colSpan={2} style={{
              background: "#8B0000", color: "#ffff00", fontWeight: "bold",
              padding: "4px 8px", textAlign: "center",
              border: "2px outset #d4d0c8",
            }}>
              ★ FEATURED ARTICLES ★
            </td>
          </tr>
          {[0, 1].map(row => (
            <tr key={row}>
              {[0, 1].map(col => {
                const idx = row * 2 + col;
                const key = WIKI_DATA.home.featured[idx];
                const article = WIKI_DATA[key];
                if (!article) return <td key={col} />;
                return (
                  <td key={col} className="rdp-featured-td" style={{
                    ...S.inset, padding: 0, width: "50%", verticalAlign: "top",
                  }}>
                    <div style={{
                      background: "#8B0000", color: "#ffffff", fontWeight: "bold",
                      padding: "3px 8px", fontSize: 12,
                    }}>{article.title}</div>
                    <div style={{ padding: "6px 8px", background: "#f0f0e8" }}>
                      <p style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 4 }}>
                        {article.content.slice(0, 180).replace(/<[^>]*>/g, "").replace(/\*\*/g, "")}...
                      </p>
                      <span onClick={() => onNavigate(key)} style={{ ...S.link, fontSize: 11 }}>
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

      <div style={S.hr} />

      <div style={{
        border: "1px dashed #ff0000", padding: 8,
        background: "#ffffcc", fontSize: 11, marginTop: 8,
        fontFamily: "monospace",
      }}>
        <b style={{ color: "#ff0000" }}>NOTICE FROM THE DEVELOPERS:</b><br />
        This site is a work in progress! New articles are being added regularly. If you have information
        to contribute, please contact us.
      </div>
    </div>
  );
}

function SearchResults({ query, onNavigate }: { query: string; onNavigate: (key: string) => void }) {
  const q = query.toLowerCase();
  const results = ALL_ARTICLES.filter(([, v]) =>
    v.title.toLowerCase().includes(q) || v.content.toLowerCase().includes(q)
  );

  return (
    <div>
      <h2 style={{ fontSize: 16, color: "#8B0000", marginBottom: 6 }}>Search Results for "{query}"</h2>
      <div style={{ fontSize: 11, color: "#808080", marginBottom: 8, fontFamily: "monospace" }}>
        {results.length} result(s) found.
      </div>
      {results.length === 0 ? (
        <p style={{ fontStyle: "italic", color: "#808080" }}>
          No results found. Try different keywords, comrade.
        </p>
      ) : (
        <table cellPadding={4} cellSpacing={0} style={{
          width: "100%", borderCollapse: "collapse", border: "1px solid #808080",
        }}>
          <thead>
            <tr style={{ background: "#8B0000", color: "#ffffff" }}>
              <th style={{ textAlign: "left", padding: "3px 8px", fontSize: 12 }}>Article</th>
              <th style={{ textAlign: "left", padding: "3px 8px", fontSize: 12 }}>Category</th>
            </tr>
          </thead>
          <tbody>
            {results.map(([key, article], i) => (
              <tr key={key} style={{ background: i % 2 === 0 ? "#f0f0e8" : "#e0dcd0" }}>
                <td style={{ padding: "4px 8px", borderBottom: "1px solid #c0c0c0" }}>
                  <span onClick={() => onNavigate(key)} style={S.link}>{article.title}</span>
                </td>
                <td style={{ padding: "4px 8px", borderBottom: "1px solid #c0c0c0", fontSize: 12 }}>
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
  const _mainRef = useRef(null);

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
    <div style={S.body}>
      <style>{`
        
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-200%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: monospace !important; }
        ::selection { background: #8B0000; color: #ffffff; }

        @media (max-width: 600px) {
          .rdp-layout, .rdp-layout tbody, .rdp-layout tr {
            display: block !important;
          }
          .rdp-sidebar {
            display: block !important;
            width: 100% !important;
          }
          .rdp-content {
            display: block !important;
            width: 100% !important;
          }
          .rdp-infobox {
            float: none !important;
            width: 100% !important;
            margin: 0 0 12px 0 !important;
          }
          .rdp-featured-td {
            display: block !important;
            width: 100% !important;
          }
        }
      `}</style>

<div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 8px" }}>
        <TopBanner onNavigate={navigate} />
        <NavBar onNavigate={navigate} onSearch={handleSearch} />

        <table className="rdp-layout" cellPadding={0} cellSpacing={6} style={{ width: "100%", marginTop: 6 }}>
          <tbody>
            <tr>
              <Sidebar onNavigate={navigate} currentPage={page} />
              <td className="rdp-content" style={{ verticalAlign: "top" }}>
                <div style={{ ...S.inset, padding: "12px 16px", background: "#ffffff", minHeight: 400 }}>
                  {page === "home" && <HomePage onNavigate={navigate} />}
                  {page === "__search__" && <SearchResults query={searchQuery} onNavigate={navigate} />}
                  {currentData && currentData.type === "article" && <ArticlePage data={currentData} onNavigate={navigate} />}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{
          ...S.outset, padding: "8px", textAlign: "center",
          marginTop: 6, marginBottom: 0,
        }}>
          <div style={{
            fontSize: 10, fontFamily: "monospace", color: "#808080",
            lineHeight: 1.6,
          }}>
            <div style={S.hr} />
© {new Date().getFullYear()} Rockets Red Glare. All rights reserved.<br />
            This site is not affiliated with Paradox Interactive.<br />
            This site is intentionally designed to look like it's from the early 2000s to match the vibe of the mod — for anyone wondering.<br />
            {["Patreon", "Help", "Contact", "Support us"].map((label, i) => (
              <span key={label}>
                {i > 0 && " | "}
                <span style={{ ...S.link, fontSize: 10 }}>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
