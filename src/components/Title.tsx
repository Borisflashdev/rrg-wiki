import { Link } from "react-router-dom";

interface TitleLink {
  name: string;
  link: string;
}

interface TitleProps {
  title: string;
  links?: TitleLink[];
  size?: number;
}

export default function Title({ title, links = [], size = 22 }: TitleProps) {
  return (
    <div className="mt-[30px] mb-4">
      <h1 style={{ fontSize: size }} className="font-bold text-black font-mono">
        {title}
      </h1>
      <div className="overflow-hidden my-1"><div className="h-[1px] bg-[#c8ccd1]" /></div>
      {links.length > 0 && (
        <div className="text-[13px] text-[#54595d]">
          Main article:{" "}
          {links.map((l, i) => (
            <span key={l.link}>
              <Link to={l.link} className="text-primary hover:underline">
                {l.name}
              </Link>
              {i < links.length - 1 && ", "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
