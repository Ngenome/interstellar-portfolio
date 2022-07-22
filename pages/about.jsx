import { useModals } from "@mantine/modals";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
const ImageViewer = ({ images, title, description }) => {
  const modals = useModals();

  return (
    <div className="flex flex-row flex-nowrap mt-6  overflow-x-scroll max-w-screen  sm:w-[70vw]">
      {images.map((e, i) => {
        return (
          <div key={i} className="group">
            <img
              key={i}
              src={e.image}
              className="opacity-80 hover:opacity-100 transition duration-300 m-1 w-[300px] h-[200px]  sm:h-[40vh] sm:object-contain "
            />
            {/* <span className=" opacity-0 group-hover:opacity-100 transition duration-300 group-hover:translate-y-10  group-hover:transition-all">
              {e.info}
            </span> */}
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 w-[300px] h-1 rounded-full bg-cyan-500  "></div>
          </div>
        );
      })}
    </div>
  );
};
var Images = [
  {
    info: "Needs Mobile App Design  ",
    image: "/needs_mockup.png",
  },
  {
    info: "Needs Mobile App Design  ",
    image: "/food_app.png",
  },

  {
    info: "Needs Mobile App Design  ",
    image: "/NeedsDesign.png",
  },
  {
    info: "Needs Mobile App Design  ",
    image: "/JipasTensail.png",
  },
  {
    info: "Needs Mobile App Design  ",
    image: "/dissolve_laptop.png",
  },
];
const AppDev = () => {
  useEffect(() => {
    gsap.fromTo(
      ".abt_description_text",
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.6,
        opacity: 1,
      }
    );
  }, []);
  return (
    <div className="text-gray-100">
      <RuledTitle title="Application development" />

      <div className=" relative abt_description_text">
        <p className="text-sm mt-5">
          I have been developing mobile apps for iOS and Android for about 2
          years now
        </p>
        <p className="text-sm">
          I use Flutter and React native to build professional high end , user
          interactive and performant applications
        </p>
        <p className="text-sm">
          In case you need my app development services you can contact me by
          clicking the button below
        </p>
      </div>

      <div className=" flex flex-col items-center">
        <span className="text-transparent font-bold text-lg bg-transparent bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text fill-transparent mt-3">
          Apps I have made
        </span>
        <div className="flex flex-row mt-2 max-w-[100vw]">
          <ImageViewer
            images={Images}
            title="Dissolve Chat app"
            description="Dissolve chat app is a chat application where you sign in with email and password and then you can chat , share photos , gifs, emojis with your friends"
          />
        </div>
      </div>
    </div>
  );
};

const RuledTitle = ({ position, title, rulecolor }) => {
  useEffect(() => {
    gsap.fromTo(
      ".rulr_item",
      {
        x: -21,
      },
      {
        x: 0,
        duration: 0.83,
      }
    );
    gsap.fromTo(
      ".rulr_text",
      {
        y: 21,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      }
    );
  }, []);
  return (
    <div className="flex flex-col items-center sm:items-start  ">
      <span className="text-cyan-400 sm:text-xl text-sm font-bold rulr_text ">
        {title}
      </span>
      <div className="h-1 w-32 sm:w-44 bg-white rounded-md rulr_item"></div>
    </div>
  );
};
const Rule = () => {
  return <div className="h-1 w-44 bg-white rounded-md"></div>;
};

const WebDev = () => (
  <div className="text-gray-100 w-full flex justify-center sm:justify-start flex-col items-center  sm:items-start">
    <RuledTitle title="Web development" />
    <div className="my-4 text-sm sm:text-base">
      <p className="text-sm">
        I have been developing websites for over 3 years now. I am able to
        develop high quality, responsive websites that are fully interactive
        with features such as animations to ensure that your clients will enjoy
        your website
      </p>
    </div>

    <div className=" flex flex-col items-center">
      <span className="text-transparent font-bold text-lg bg-transparent bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text fill-transparent mt-3">
        Web development projects
      </span>
      <div className="flex flex-row mt-2 max-w-[100vw]">
        <ImageViewer
          images={Images}
          title="Dissolve Chat app"
          description="Dissolve chat app is a chat application where you sign in with email and password and then you can chat , share photos , gifs, emojis with your friends"
        />
      </div>
    </div>
  </div>
);

const Design = () => (
  <div className="text-gray-100 w-full flex justify-center sm:justify-start flex-col items-center  sm:items-start">
    <RuledTitle title="Design" />
    <div className="my-4 text-sm sm:text-base">
      <p className="text-sm">
        I design websites , mobile applications , posters , banners and flyers
        and even products
      </p>
      <p className="text-sm">
        I primarily use Figma for design , together with other video and photo
        editing software.
      </p>
    </div>

    <div className=" flex flex-col items-center">
      <span className="text-transparent font-bold text-lg bg-transparent bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text fill-transparent mt-3">
        Design Projects
      </span>
      <div className="flex flex-row mt-2 max-w-[100vw]">
        <ImageViewer
          images={Images}
          title="Dissolve Chat app"
          description="Dissolve chat app is a chat application where you sign in with email and password and then you can chat , share photos , gifs, emojis with your friends"
        />
      </div>
    </div>
  </div>
);
const AboutPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".abt_heading",
      {
        x: 30,
      },
      {
        x: 0,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      ".abt_item",
      {
        x: 20,
      },
      {
        x: 0,
        duration: 0.56,
        stagger: 0.3,
      }
    );
  }, []);
  const [activeItem, setActiveItem] = useState("design");
  function ColorResolver(e) {
    return activeItem == e ? "text-cyan-300" : "text-white";
  }
  const Item = ({ name, resolver }) => {
    return (
      <li
        className="abt_item mx-3 sm:mx-0 group  "
        onClick={() => {
          setActiveItem(resolver);
        }}
      >
        <span
          className={[`${ColorResolver(resolver)}`, styles.work_link].join(" ")}
        >
          {name}
        </span>
        <span className="absolute -bottom-1 left-0 w-0 h-1  bg-blue-400 transition-all group-hover:w-full"></span>
      </li>
    );
  };
  return (
    <div>
      <h1 className="abt_heading font-bold text-2xl text-white relative ">
        About me
      </h1>
      <div className="flex flex-col sm:flex-row ">
        <div>
          <div
            className={[
              ``,
              "w-full  sm:w-[26vw] bg-black bg-opacity-20 h-full items-center flex flex-col",
            ].join(" ")}
          >
            <ul className="mt-0 mb-2 sm:mb-0 sm:mt-44  flex flex-row sm:flex-col ">
              <Item name="App developer" resolver="app" />
              <Item name="Web developer" resolver="web" />
              <Item name="Designer" resolver="design" />
            </ul>
          </div>
        </div>
        <div className="h-[80vh] w-screen sm:w-[70vw] bg-gray-400 bg-opacity-10 backdrop-blur-md rounded-md">
          {activeItem == "app" ? (
            <AppDev />
          ) : activeItem == "web" ? (
            <WebDev />
          ) : (
            <Design />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
