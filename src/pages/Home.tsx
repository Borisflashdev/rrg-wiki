import logo from "../assets/logo.png";

export default function HomePage() {
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

      <div className="wiki-hr" />

      <div className="[border:1px_dashed_#ff0000] p-2 bg-[#ffffcc] text-[11px] mt-2 font-mono">
        <b className="text-[#ff0000]">NOTICE FROM THE DEVELOPERS:</b><br />
        This site is a work in progress! New articles are being added regularly. If you have information
        to contribute, please contact us.
      </div>
    </div>
  );
}
