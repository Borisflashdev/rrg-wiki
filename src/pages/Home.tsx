import { Link } from "react-router-dom";
import Title from "../components/Title";
import ImageBox from "../components/ImageBox";
import logo from "../assets/logo_white_bg.png";
import map from "../assets/map_trans.png";
import commonwealth from "../assets/pacts/commonwealth.png";
import warsawPact from "../assets/pacts/warsaw_pact.jpg";
import mediterraneanPact from "../assets/pacts/mediterranean_pact.png";
import westernUnion from "../assets/pacts/western_union.png";
import laFrancophonie from "../assets/pacts/la_francophonie.png";

export default function HomePage() {
  return (
    <div>
      <Title title="Welcome to The Rocket's Red Glare Wiki!" links={[]} />
      <div className="mobile:float-right mobile:ml-4 mb-2 w-full mobile:w-auto">
        <ImageBox src={logo} caption="The official Rocket's Red Glare mod logo, as of 2026." size={500} />
      </div>
      <div className="mb-3">
        <p className="text-[16px] text-black leading-[1.7]">
          <b>Rocket's Red Glare</b> is a mod for <a href="https://www.paradoxinteractive.com/games/hearts-of-iron-iv/aboutsad " className="text-primary hover:underline">Hearts of Iron IV</a> set in an alternate history where the Soviet
          Union and international communism emerged victorious from the Cold War. This wiki is dedicated to the lore,
          history, and world of the mod — covering the nations, factions, and key figures that define this reimagined
          20th century. Articles explore how the world arrived at its current state: the wars fought, the ideological
          struggles that shaped borders, and the leaders who rose and fell along the way.
          <br /><br />
          This is not a gameplay guide. The vast majority of this wiki is written from an in-universe perspective,
          treating the mod's alternate history as fact. If you are looking for information on nations, historical
          figures, or the events that led to the world of Rocket's Red Glare, you are in the right place.
          For in-game mechanics, ideologies, technologies, and events, see the Compendium.
        </p>
      </div>

      <Title title="Getting started" links={[]} size={18} />
      <div className="mb-3">
        <p className="text-[16px] text-black leading-[1.7]">
          This wiki is currently maintained exclusively by the developers of Rocket's Red Glare and is not open
          for public editing at this time. If you have a suggestion, a correction, or would like to contribute
          information, we encourage you to reach out to us directly. You can contact the team via{" "}
          <a href="#" className="text-primary hover:underline">Patreon</a>,
          or through our{" "}
          <a href="#" className="text-primary hover:underline">Contact</a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">Support us</a>{" "}
          pages, where you will find all the relevant information on how to get in touch.
          <br /><br />
          We appreciate all feedback and ideas from the community. The wiki can only improve with input from players,
          and while direct editing is not available, no suggestion goes unnoticed. Assume that everyone involved in
          the project is working toward making it better — we certainly are.
        </p>
      </div>
      <Title title="The world of RRG" links={[]} size={18} />
      <div className="mb-3">
        <p className="text-[16px] text-black leading-[1.7]">
          The world of Rocket's Red Glare is shaped by a web of competing powers, ideological blocs, and
          fragile alliances. Below you will find a list of the major pacts and coalitions that define the geopolitical
          landscape, as well as a full list of playable nations and their place in this alternate world. If you are
          new to the mod and unsure where to begin, feel free to start there.
        </p>
      </div>
      <div className="grid grid-cols-2 nav3:grid-cols-4 gap-3 mt-4">
        {[
          { src: warsawPact, label: "Warsaw Pact", items: [{ label: "Soviet Union", link: "/nations/ussr" }, "Germany", "Czechoslovakia", "Hungary", "Romania", "Bulgaria", "Yugoslavia", "Turkey", "Iran", "Iraq", "Syria", "Afghanistan", "Republic of Mahabad", "Austria", "Macedonia"] },
          { src: mediterraneanPact, label: "Mediterranean Pact", items: ["Italy", "People's Republic of Greece", "Egypt", "Algeria", "Somalia", "Croatia", "Albania", "Portugal", "Slovenia", "Free Territory of Trieste", "San Marino"] },
          { src: westernUnion, label: "Western Union", items: ["Netherlands", "Sweden", "Denmark", "Norway", "Spain", "Flanders", "Luxembourg", "Iceland"] },
          { src: commonwealth, label: "Commonwealth", items: ["United Kingdom", "Canada", "Australia", "New Zealand", "Malayan Union", "Republic of Newfoundland", "West Indies Federation", "Rhodesia", "Northern Rhodesia", "Territory of Venda", "Fiji", "New England", "Tuvalu", "Niue", "Cook Islands"] },
        ].map(({ src, label, items }) => (
          <div key={label} className="flex flex-col items-center">
            <ImageBox src={src} caption={`<a href="#" class="text-primary hover:underline"><b>${label}</b></a>`} boxStyle={false} size={300} />
            <ul className="list-none text-[14px] mt-1 w-full text-center">
              {items.map(item => {
                const label = typeof item === "string" ? item : item.label;
                const link = typeof item === "string" ? null : item.link;
                return (
                  <li key={label}>
                    {link
                      ? <Link to={link} className="text-primary hover:underline">{label}</Link>
                      : <a href="#" className="text-primary hover:underline">{label}</a>
                    }
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 nav3:grid-cols-4 gap-3 mt-3">
        <div className="flex flex-col items-center">
          <ImageBox src={laFrancophonie} caption='<a href="#" class="text-primary hover:underline"><b>La Francophonie</b></a>' boxStyle={false} size={300} />
          <ul className="list-none text-[14px] mt-1 w-full text-center">
            {["France", "Quebec", "Mali Federation", "Mauritania", "Upper Volta", "Guinea-Cayenne", "Wallonia", "Saarland", "Guadeloupe", "French Polynesia", "New Caledonia", "St Pierre and Miquelon", "Wallis and Futuna"].map(item => (
              <li key={item}><a href="#" className="text-primary hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>
        {[
          { label: "Americas", items: ["United States", "United Socialist States of America", "Cuba", "United Mexican States", "Bolivia", "Gran Chaco", "New Africa", "California", "Texas", "Free City of St. Louis", "Free Territory", "Idaho", "Guatemala"] },
          { label: "Africa", items: ["DR Congo", "Sudan", "Ethiopia", "South Africa", "Zaire", "Tanzania", "Nigeria", "Libya", "Katanga", "Benin", "Lesotho", "Free City of Pretoria"] },
          { label: "Asia", items: ["China", "India", "Vietnam", "Indonesia", "People's Republic of Japan", "State of Japan", "Korea", "Mongolia", "South Yemen", "Kashmir", "North Kalimantan", "Hokkaido", "Ryukyu", "Jewish State of Tasmania"] },
        ].map(({ label, items }) => (
          <div key={label} className="flex flex-col items-center">
            <a href="#" className="text-primary hover:underline text-[14px]"><b>{label}</b></a>
            <ul className="list-none text-[14px] mt-1 w-full text-center">
              {items.map(item => {
                const label = typeof item === "string" ? item : item.label;
                const link = typeof item === "string" ? null : item.link;
                return (
                  <li key={label}>
                    {link
                      ? <Link to={link} className="text-primary hover:underline">{label}</Link>
                      : <a href="#" className="text-primary hover:underline">{label}</a>
                    }
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <Title title="Timeline" links={[]} size={18} />
      <div className="mb-3">
        <p className="text-[16px] text-black leading-[1.7]">
          Optionally, you can follow the{" "}
          <a href="#" className="text-primary hover:underline">complete timeline</a>
          {" "}— a chronological overview of the key events that shaped the world from 1944 to 2000,
          from the final years of the Second World War to the state of the world at the mod's start date.
        </p>
      </div>
      <div className="flex justify-center">
        <ImageBox src={map} caption="The official Rocket's Red Glare world map, as of 2026." boxStyle={true} size={1200} />
      </div>
    </div>
  );
}
