import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
// import Sketch from "react-p5";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useRef } from "react";

const DynamicComponentWithNoSSR = dynamic(
  () => {
    import("react-p5").then((mod) => {
      const Sketch = mod.Sketch;

      const deg = (a) => (Math.PI / 180) * a;
      const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1));
      const opt = {
        particles: window.width / 500 ? 1000 : 500,
        noiseScale: 0.009,
        angle: (Math.PI / 180) * -90,
        h1: rand(0, 360),
        h2: rand(0, 360),
        s1: rand(20, 90),
        s2: rand(20, 90),
        l1: rand(30, 80),
        l2: rand(30, 80),
        strokeWeight: 1.2,
        tail: 82,
      };
      const Particles = [];
      let time = 0;
      document.body.addEventListener("click", () => {
        opt.h1 = rand(0, 360);
        opt.h2 = rand(0, 360);
        opt.s1 = rand(20, 90);
        opt.s2 = rand(20, 90);
        opt.l1 = rand(30, 80);
        opt.l2 = rand(30, 80);
        opt.angle += deg(random(60, 60)) * (Math.random() > 0.5 ? 1 : -1);

        for (let p of Particles) {
          p.randomize();
        }
      });

      /*--------------------
Particle
--------------------*/
      class Particle {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.lx = x;
          this.ly = y;
          this.vx = 0;
          this.vy = 0;
          this.ax = 0;
          this.ay = 0;
          this.hueSemen = Math.random();
          this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
          this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
          this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
          this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
        }

        randomize() {
          this.hueSemen = Math.random();
          this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
          this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
          this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
          this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
        }

        update() {
          this.follow();

          this.vx += this.ax;
          this.vy += this.ay;

          var p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          var a = Math.atan2(this.vy, this.vx);
          var m = Math.min(this.maxSpeed, p);
          this.vx = Math.cos(a) * m;
          this.vy = Math.sin(a) * m;

          this.x += this.vx;
          this.y += this.vy;
          this.ax = 0;
          this.ay = 0;

          this.edges();
        }

        follow() {
          let angle =
            noise(
              this.x * opt.noiseScale,
              this.y * opt.noiseScale,
              time * opt.noiseScale
            ) *
              Math.PI *
              0.5 +
            opt.angle;

          this.ax += Math.cos(angle);
          this.ay += Math.sin(angle);
        }

        updatePrev() {
          this.lx = this.x;
          this.ly = this.y;
        }

        edges() {
          if (this.x < 0) {
            this.x = width;
            this.updatePrev();
          }
          if (this.x > width) {
            this.x = 0;
            this.updatePrev();
          }
          if (this.y < 0) {
            this.y = height;
            this.updatePrev();
          }
          if (this.y > height) {
            this.y = 0;
            this.updatePrev();
          }
        }

        render() {
          stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`);
          line(this.x, this.y, this.lx, this.ly);
          this.updatePrev();
        }
      }
      function Start(p5, parent) {
        /*--------------------
Setup
--------------------*/
        p5.createCanvas(windowWidth, windowHeight).parent(parent);
        for (let i = 0; i < opt.particles; i++) {
          Particles.push(
            new Particle(Math.random() * width, Math.random() * height)
          );
        }
        strokeWeight(opt.strokeWeight);
      }

      /*--------------------
Draw
--------------------*/
      function draw() {
        time++;
        background(0, 100 - opt.tail);

        for (let p of Particles) {
          p.update();
          p.render();
        }
      }

      /*--------------------
Resize
--------------------*/
      function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }
      return <Sketch setup={Start} draw={draw} />;
    });
  },
  { ssr: false }
);
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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js"
        strategy="beforeInteractive"
      /> */}
      <div className="w-full h-[100vh]">
        {/* <Sketch setup={Start} draw={draw} />
         */}
        {/* <DynamicComponentWithNoSSR /> */}
        {/* <video
          autoPlay
          loop
          // height={"100vh"}
          // width="100vw"
          className="h-screen w-screen fixed top-0 left-0 object-fill"
        >
          <source src="/lines.mp4" />
        </video> */}

        <BackgroundAnimation />

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
              class=" animate_content relative h-32 mt-40"
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
            <img
              src="/circlebg.png"
              className="rotator h-[600px] w-[600px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
