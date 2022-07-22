import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { homeIcon } from "./svgs";
// import { aboutIcon, homeIcon } from "./svgs";
import { motion, useAnimation } from "framer-motion";
export default function Nav() {
  const [BurgerActive, setBurgerActive] = useState(false);
  const Burger = () => (
    <div
      className="sm:hidden mt-2"
      onClick={() => {
        setBurgerActive(!BurgerActive);
      }}
    >
      <div
        className={`w-10 h-1 mt-1.5 bg-white rounded-full transition duration-300 ${
          BurgerActive ? "transform rotate-45 transition duration-300" : ""
        } `}
      ></div>
      <div
        className={`w-10 h-1 mt-1.5 bg-white rounded-full ${
          BurgerActive ? "hidden" : " "
        }`}
      ></div>
      <div
        className={`w-10 h-1 mt-1.5 bg-white rounded-full transition duration-300 ${
          BurgerActive
            ? "transform -rotate-45 -translate-y-2.5 transition duration-300"
            : ""
        } `}
      ></div>
    </div>
  );

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
  }, [BurgerActive]);
  return (
    <nav
      className={`${
        BurgerActive ? "h-[100vh]" : "h-10vh"
      }  sm:h-[10vh]  flex sm:flex-row flex-col sm:w-full sm:justify-between z-20 bg-primary_bg bg-opacity-50 backdrop-blur-lg items-center shadow-sm sticky top-0`}
    >
      <div className="flex flex-row  sm:ml-0 sm:px-5 ">
        <span className="text-white w-[80vw] sm:w-fit justify-between ">
          {" "}
          Kelvin Ng&apos;eno
        </span>
        <Burger />
      </div>

      <ul className="flex flex-col sm:flex-row sm:flex-nowrap w-[40vw] sm:w-fit   ">
        <NavComponent
          active={BurgerActive}
          img={"/icons/home.png"}
          href="/"
          text="Home"
        />
        <NavComponent
          active={BurgerActive}
          img={"/icons/about.png"}
          href="about"
          text="About"
        />
        <NavComponent
          active={BurgerActive}
          img={"/icons/mechanic-tools.png"}
          text="Skills"
          href="skillset"
        />
        <NavComponent
          img="/icons/messages.png"
          href="contact"
          text="Contact"
          active={BurgerActive}
        />
        <NavComponent
          img="/icons/project.png"
          href="projects"
          text="Projects"
          active={BurgerActive}
        />
        <NavComponent
          img="/icons/cogwheels.png"
          href="process"
          text="Process"
          active={BurgerActive}
        />
      </ul>
    </nav>
  );
}

const NavComponent = ({ img, text, href, svg, active }) => {
  return (
    <a
      href={href}
      className={`nav_item sm:mx-10 my-5 sm:my-0 group ${
        active ? "" : "hidden"
      } sm:flex flex-row `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.04 }}
        transition={{
          opacity: 2,
          color: 5,
        }}
        className="flex flex-row sm:flex-col items-center sm:w-12 h-12"
      >
        <div className=" w-12 h-12 flex-col flex items-center">
          {svg ? (
            img
          ) : (
            <Image
              src={img}
              height={30}
              width={30}
              layout="fixed"
              className=" h-10 sm:h-5 w-10  object-contain "
            />
          )}{" "}
        </div>
        <span className="text-white sm:opacity-0 transition duration-300 text-sm sm:group-hover:opacity-100">
          {text}
        </span>
      </motion.div>
    </a>
  );
};
