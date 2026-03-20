import { Link } from "react-router-dom";
import Title from "../../components/Title";
import CountryBox from "../../components/CountryBox";
import flag from "../../assets/nations/ussr/flag.webp";

const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-primary hover:underline">{children}</Link>
);

export default function USSR() {
  return (
    <div>
      <CountryBox
        name="Union of Soviet Socialist Republics"
        name2="Союз Советских Социалистических Республик"
        flag={flag}
        capital={{ label: "Moscow", link: "/others/moscow" }}
        languages={["Russian", "Ukrainian", "Belarusian", "Kazakh", "Uzbek", "Georgian", "Armenian", "Azerbaijani", "Lithuanian", "Latvian", "Estonian", "Turkmen", "Tajik", "and 26 more"]}
        ethnicGroups={["60.5% East Slavs", "16.7% Turkic", "22.8% other"]}
        religions={[]}
        ideology={{ label: "Communism", link: "/ideologies/communism" }}
        party={{ label: "Communist Party of the Soviet Union", link: "/parties/cpsu" }}
        leaders={[{ type: "Leader", name: "Gennady Yanayev", link: "/figures/gennady_yanayev" }]}
        area={23248000}
        population={359037422}
        currency="Soviet ruble (руб)"
        faction={[{ label: "Warsaw Pact", link: "/factions/warsaw_pact" }]}
      />
      <Title title="Union of Soviet Socialist Republics" links={[]} />
      <div className="text-[16px] text-black leading-[1.7] mb-3">
        <p className="mb-3">
          The <b>Union of Soviet Socialist Republics</b> (<b>USSR</b> or <b>Soviet Union</b>), is a transcontinental
          socialist state and the world's largest country by area, spanning from the Baltic Sea to the Pacific Ocean.
          As of 2000, the USSR comprises thirty-one constituent union republics following the{" "}
          <L to="/events/andropov_reforms">Andropov reforms</L> of 1984–1985. The Soviet Union is governed as a
          one-party state by the{" "}
          <L to="/parties/cpsu">Communist Party of the Soviet Union</L> (CPSU), with its capital in{" "}
          <L to="/others/moscow">Moscow</L>. The
          current General Secretary is{" "}
          <L to="/figures/gennady_yanayev">Gennady Yanayev</L>, who succeeded{" "}
          <L to="/figures/yuri_andropov">Yuri Andropov</L> in January 1988.
        </p>
        <p className="mb-3">
          The Soviet Union is widely regarded as the world's preeminent military power. Following the{" "}
          <L to="/events/dissolution_of_nato">dissolution of NATO</L> in 1993, the{" "}
          <L to="/events/german_reunification">conquest of West Germany</L> and Austria in 1994, the{" "}
          <L to="/events/soviet_turkish_war">Turkish campaign</L> of 1996, and the{" "}
          <L to="/events/american_dissolution_war">American Dissolution War</L> (1989–1998) that fragmented the{" "}
          <L to="/nations/usa">United States</L> into over twenty successor states, the Soviet Union and its{" "}
          <L to="/factions/warsaw_pact">Warsaw Pact</L> allies stretch from the{" "}
          <L to="/nations/gdr">German Democratic Republic</L> to the{" "}
          <L to="/nations/turkish_peoples_republic">Turkish People's Republic</L>.
        </p>
        <p className="mb-3">
          The Soviet space programme has achieved a series of historic firsts, including the first satellite in orbit
          ({" "}<L to="/space/sputnik">Sputnik</L>, 1957), the first human in space ({" "}
          <L to="/figures/yuri_gagarin">Yuri Gagarin</L>, 1961), and the first human on the Moon ({" "}
          <L to="/figures/alexei_leonov">Alexei Leonov</L>, 1969). The USSR maintains a permanent lunar
          installation, <L to="/space/zvezda_base">Zvezda Base</L>, established in 1973.
        </p>
      </div>
      <Title title="History" links={[]} size={20} />
      <Title title="Pre-divergence History" links={[]} size={18} />
      <div className="text-[16px] text-black leading-[1.7] mb-3">
        <p>
          The Soviet Union was founded on 30 December 1922 in the aftermath of the Russian Revolution and Russian
          Civil War. Under <L to="/figures/vladimir_lenin">Vladimir Lenin</L> and subsequently under{" "}
          <L to="/figures/joseph_stalin">Joseph Stalin</L>, the country underwent rapid industrialisation through
          a series of Five-Year Plans and collectivisation of agriculture. The USSR bore the brunt of the European
          war against Nazi Germany during the <L to="/events/world_war_two">Great Patriotic War</L> (1941–1945), losing an estimated 27 million citizens.
        </p>
      </div>
      <Title title="World War II and Immediate Postwar Period (1944–1949)" links={[]} size={18} />
      <Title title="The Moscow Armistice and the Absorption of Finland" links={[{ name: "Annexation of Finland", link: "/events/annexation_of_finland" }]} size={16} />
      <div className="text-[16px] text-black leading-[1.7] mb-3">
        <p className="mb-3">
          In 1944, <L to="/nations/finland">Finland</L> signed the Moscow Armistice, ending the <L to="/events/continuation_war">Continuation War</L>.
          Stalin — emboldened by the Red Army's
          unstoppable advance across Eastern Europe — imposed conditions amounting to a death sentence for Finnish
          sovereignty. Beyond the cession of Karelia and Petsamo, the armistice demanded permanent stationing of
          Soviet military forces, dissolution of all "anti-Soviet" political organisations, and a joint Soviet-Finnish
          defence command under a Red Army general. <L to="/figures/franklin_roosevelt">Roosevelt</L>, focused on
          the <L to="/events/world_war_two">Pacific War</L>, raised no objection.{" "}
          <L to="/figures/winston_churchill">Churchill</L> protested in private but conceded the point at Yalta in
          exchange for Soviet flexibility on <L to="/nations/greece">Greece</L>.
        </p>
        <p className="mb-3">
          By March 1945, the Allied Control Commission in Helsinki, dominated by Soviet representatives under Andrei
          Zhdanov, had engineered the removal of independent Finnish cabinet ministers. A Communist Party-led
          government was installed. Thousands of Finnish officers, civil servants, and politicians were arrested and
          deported to Soviet labour camps. On 31 October 1947, the <L to="/nations/finnish_karelian_ssr">Finnish-Karelian Soviet Socialist Republic</L> was formally proclaimed
          and absorbed into the USSR. Finland — the
          nation that had humiliated the Red Army in the Winter War — ceased to exist as an independent state. The
          annexation barely made headlines in the West, drowned out by crises in Greece, Iran, and Germany. Stalin
          had achieved what he first attempted in 1939: the complete conquest of Finland.
        </p>
      </div>
      <Title title="The Occupation of Hokkaido and the Partition of Japan" links={[{ name: "Operation Downfall", link: "/events/operation_downfall" }, { name: "Partition of Japan", link: "/events/partition_of_japan" }]} size={16} />
      <div className="text-[16px] text-black leading-[1.7] mb-3">
        <p className="mb-3">
          On 2 September 1945, exploiting the total collapse of central authority in Tokyo following the{" "}
          <L to="/events/nuclear_destruction_of_tokyo">nuclear destruction of Tokyo</L> and the{" "}
          <L to="/events/japanese_military_coup">Japanese military coup</L>, the Soviet Union launched a massive
          amphibious invasion of <L to="/nations/hokkaido">Hokkaido</L>. The Japanese 5th Area Army offered
          sporadic resistance, and the Soviets seized the island within weeks. On 12 November, Soviet forces
          launched an offensive from Hokkaido, pushing south into northern Honshū.
        </p>
        <p className="mb-3">
          The <L to="/events/manila_agreement">Manila Agreement</L> of December 1945 halted all offensives and
          established fixed occupation boundaries. On 5 January 1946, the{" "}
          <L to="/events/manila_agreement">Partition of Japan</L> took effect: Japan was divided into American,
          British, Soviet, and nominal Chinese (ROC) zones. On 15 June 1946, the{" "}
          <L to="/nations/hokkaido">People's Republic of Hokkaido</L> was proclaimed in Sapporo with{" "}
          <L to="/figures/tokuda_kyuichi">Tokuda Kyūichi</L> installed as Chairman. Soviet military bases at
          Wakkanai and Asahikawa ensured Moscow's permanent grip on the island. On 10 September 1950, Moscow
          announced the <L to="/nations/peoples_republic_of_japan">People's Republic of Japan</L> in the northern
          Honshū occupation zone, with its capital in Sendai and{" "}
          <L to="/figures/nosaka_sanzo">Nosaka Sanzō</L> as Chairman. The two communist Japanese states signed a
          mutual defence treaty but remained separate — a deliberate Soviet design to prevent any single Japanese
          communist leader from accumulating too much power.
        </p>
      </div>
    </div>
  );
}
