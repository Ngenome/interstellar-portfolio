import gsap from "gsap";
import { useEffect } from "react";
import { homeIcon } from "./svgs";
// import { aboutIcon, homeIcon } from "./svgs";

export default function Nav() {
  useEffect(() => {
    gsap.fromTo(
      ".nav_item",
      {
        y: -14,
      },
      {
        y: 0,
        duration: 0.45,
        stagger: 0.12,
      }
    );
  }, []);
  return (
    <nav className="  h-[10vh]  flex flex-row  w-full justify-between z-20 bg-primary_bg bg-opacity-50 backdrop-blur-lg items-center shadow-sm sticky top-0">
      <span className="text-white "> Kelvin Ng&apos;eno</span>
      <ul className="flex flex-row flex-nowrap">
        <NavComponent svg img={homeIcon} href="/" text="Home" />
        <NavComponent img={"/icons/about.png"} href="about" text="About" />
        <NavComponent
          img={"/icons/mechanic-tools.png"}
          text="Skills"
          href="skillset"
        />
        <NavComponent img="icons/messages.png" href="contact" text="Contact" />
        <NavComponent
          img="icons/messages.png"
          href="projects"
          text="projects"
        />
        <NavComponent img="icons/cogwheels.png" href="process" text="Process" />
      </ul>
    </nav>
  );
}

const NavComponent = ({ img, text, href, svg }) => {
  return (
    <a href={href} className="nav_item mx-10 group">
      <div className="flex flex-col w-12 h-12 items-center">
        {svg ? (
          img
        ) : (
          <img
            src={img}
            className="h-6 object-contain transition duration-300"
          />
        )}{" "}
        <span className="text-white opacity-0 transition duration-300 text-sm group-hover:text-base group-hover:opacity-100">
          {text}
        </span>
      </div>
    </a>
  );
};
