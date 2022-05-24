import { aboutIcon, homeIcon } from "./svgs";

export default function Nav() {
  return (
    <nav className="h-[10vh] flex flex-row w-full justify-between bg-primary_bg bg-opacity-50 backdrop-blur-lg items-center shadow-sm">
      <span className="text-white "> Kelvin Ng&apos;eno</span>
      <ul className="flex flex-row flex-nowrap">
        <NavComponent img={homeIcon} href="/" />
        <NavComponent
          img={<img src="/icons/about.png" className="h-6" />}
          href="about"
        />
        <NavComponent
          img={<img src="/icons/mechanic-tools.png" className="h-6" />}
          href="skillset"
        />
        <NavComponent
          img={<img src="/icons/messages.png" className="h-6" />}
          href="contact"
        />
      </ul>
    </nav>
  );
}

const NavComponent = ({ img, text, href }) => {
  return (
    <a href={href} className="mx-10">
      <div className="flex flex-row">
        {img}
        <span className="text-white ">{text}</span>
      </div>
    </a>
  );
};
