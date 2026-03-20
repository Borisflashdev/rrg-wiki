import Title from "../components/Title";
import ImageBox from "../components/ImageBox";
import logo from "../assets/logo_white_bg.png";
import logoClear from "../assets/logo.png";

export default function HomePage() {
  return (
    <div>
      <Title title="Welcome to The Rocket's Red Glare Wiki!" links={[]} />
      <div className="mobile:float-right mobile:ml-4 mb-2 w-full mobile:w-auto">
        <ImageBox src={logo} caption="The official Rocket's Red Glare mod logo, as of 2026." size={500} />
        <ImageBox src={logoClear} caption="The official Rocket's Red Glare mod logo (transparent), as of 2026." size={500} />
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
          figures, or the events that led to the world of <b>Rocket's Red Glare</b>, you are in the right place.
          For in-game mechanics, ideologies, technologies, and events, see the <b>Compendium</b>.
        </p>
      </div>

    </div>
  );
}
