import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import NET from "vanta/dist/vanta.net.min.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import data from "../../data";
import Script from "next/script";
function getItem(id) {
  for (let index = 0; index < data.projects.length; index++) {
    if (data.projects[index].id == id) {
      return data.projects[index];
    }
  }
}
const Project = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [item, setItem] = useState(null);
  useEffect(() => {
    setItem(getItem(pid));
  }, [pid]);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaBG = useRef(null);
  return (
    <div
      ref={vantaBG}
      className="w-screen overflow-scroll h-screen flex flex-col  items-center"
    >
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        onLoad={() => {}}
      />
      <h2 className="text-white font-bold text-base  text-center sm:text-xl">
        {item?.descriptionTitle}
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: 2,
          color: 5,
        }}
        className=" mt-5 sm:mt-10 "
      >
        <p className="ml-10 text-gray-400">{item?.description}</p>
      </motion.div>
      <div className="flex flex-row items-center  mt-10">
        {item?.tools.map((e, i) => {
          return (
            <div key={i} className="flex flex-row items-center ml-10 ">
              <div className="h-2 w-2 rounded-full mr-1 bg-gray-500"></div>
              <span className="text-gray-300 hover:text-blue-400">{e}</span>
            </div>
          );
        })}

        {/* <a className="text-white ml-4" href={item?.link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              transform="translate(1 1)"
            >
              <path d="M15 10v6a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2h6M12 0h6v6M7 11L18 0" />
            </g>
          </svg>
        </a> */}
      </div>
      <div
        className="flex sm:flex-row flex-col w-[90vw] sm:overflow-x-scroll overflow-y-scroll
       h-fit mb-[5vh]"
      >
        {item?.images.map((e, i) => {
          return (
            <motion.div
              key={i}
              className=" mt-5 sm:mt-0 mr-4 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
            >
              <img
                src={e}
                className="sm:h-[60vh] w-screen sm:w-fit object-contain"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
