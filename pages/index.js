import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
// import Sketch from "react-p5";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import BIRDS from "vanta/dist/vanta.birds.min";
const BackgroundAnimation = () => {
  return (
    <>
      <p id="head1" className="header">
        Awesome designs
      </p>
      <p id="head2" className="header">
        Just
      </p>
      <p id="head3" className="header">
        For you
      </p>
      <p id="head4" className="header">
        simple and awesome all the time
      </p>

      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </>
  );
};
export default function Home() {
  const heading = useRef(null);
  const listing = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaBG = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaBG.current,
        })
      );
    }
    if (vantaEffect) {
      vantaEffect.setOptions({
        color: "aqua",
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  useEffect(() => {
    const q = gsap.utils.selector(listing);
    gsap.fromTo(
      heading.current,
      {
        x: 79,
      },
      {
        x: 0,
        duration: 1,
        // opacity: 0,
      }
    );
    gsap.fromTo(
      ".anchor",
      {
        opacity: 0,
        stagger: 0.4,
        x: -7,
        // opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 1,
        x: -27,
      }
    );
  }, []);

  return (
    <div className={styles.container} ref={vantaBG}>
      <Head>
        <title>Kelvin Ng&apos;eno</title>
        <meta name="description" content="Kelvin Ng'eno personal portfolio" />
        <link rel="icon" href="/icons/kelvin.png" />
        <meta name="theme-color" content="#001220" />
      </Head>
      {/* <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js"
        strategy="beforeInteractive"
      /> */}
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        onLoad={() => {}}
      />
      <div className="w-100vw h-[100vh]">
        <div className="flex flex-row flex-nowrap justify-between ">
          <div className="">
            {/* <h1
              ref={heading}
              id="name_heading"
              className="font-bold linear-wipe text-[60px] text-white relative mt-[20vh]"
            ></h1> */}

            <div
              ref={heading}
              id="name_heading"
              className=" animate_content relative h-32 mt-20 md:mt-40"
            >
              <span className="absolute w-[400px]">Kelvin Ngeno</span>

              <span className="absolute w-[400px]">Kelvin Ngeno</span>
            </div>

            <div className={["text-white", " "].join(" ")}>
              <ul>
                <li>
                  <a
                    href="about"
                    id="anchor"
                    className={["anchor text-white", styles.work_link].join(
                      " "
                    )}
                  >
                    App developer
                  </a>
                </li>
                <li ref={listing}>
                  <a
                    href=""
                    id="anchor"
                    className={["anchor text-white", styles.work_link].join(
                      " "
                    )}
                  >
                    Web developer
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="anchor"
                    className={["anchor text-white", styles.work_link].join(
                      " "
                    )}
                  >
                    Designer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-20">
            {/* <img
              src="/circlebg.png"
              className="rotator h-[600px] w-[600px] object-contain"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
