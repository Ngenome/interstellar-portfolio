import gsap from "gsap";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function SocialIcons() {
  React.useEffect(() => {
    gsap.fromTo(
      ".social_icon_container",
      {
        x: -16,
      },
      {
        x: 0,
        duration: 0.6,

        // delay: 0.3,
      }
    );
  }, []);
  var stls =
    "opacity-75 hover:opacity-100 mx-3 transition duration-500 relative  hover:-translate-y-2 social_icon   ";
  var iconColor = "#fff";
  return (
    <div className="social_icon_container   flex flex-row w-[100vw] sm:w-[400px] justify-center flex-nowrap  fixed sm:bottom-5 bottom-0  sm:bg-indigo-600 hover:bg-purple-500 hover:duration-500 hover:bg-opacity-40 transition duration-200 shadow-2xl sm:border-indigo-100 sm:border-2 bg-opacity-50 sm:rounded-tr-full sm:rounded-br-full  z-50 sm:p-1  backdrop-blur-sm">
      <SocialIcon
        className={stls}
        bgColor={iconColor}
        url="https://dribbble.com/Interstellarcode"
      />
      <SocialIcon
        bgColor={iconColor}
        className={stls}
        url="https://github.com/ngenome"
      />
      <SocialIcon
        bgColor={iconColor}
        className={stls}
        url="https://www.linkedin.com/in/interstellar-code-865113189/"
      />
      <SocialIcon
        bgColor={iconColor}
        className={stls}
        url="https://twitter.com/CgInterstellar"
      />
    </div>
  );
}
