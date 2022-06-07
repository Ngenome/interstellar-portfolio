import { useModals } from "@mantine/modals";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
const ImageViewer = ({ images, title, description }) => {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      overlayBlur: 20,
      title: title,
      size: "90vw",
      styles: {
        modal: {
          color: "aqua",
          backgroundColor: "#001220",
        },
      },
      children: (
        <div>
          <div className="w-[88vw] h-[80vh] bg-gray-900 bg-opacity-10 flex flex-row flex-wrap items-center overflow-x-scroll ">
            {images.map((e, i) => {
              return (
                <div className=" bg-red-100 rounded mx-3  " key={i}>
                  <img
                    src={e.image}
                    className=" m-1 h-[70vh]  object-contain"
                  />
                </div>
              );
            })}
            <div></div>
          </div>
          <div className="h-[10vh]">
            <p>{description}</p>
          </div>
        </div>
      ),
    });
  };

  return (
    <div className="flex flex-row flex-nowrap mt-6 align-middle items-center">
      {images.map((e, i) => {
        return (
          <div
            key={i}
            className=" bg-red-100 rounded mx-3 "
            onClick={openContentModal}
          >
            <img src={e.image} className=" m-1 h-[30vh]  object-contain" />
          </div>
        );
      })}
    </div>
  );
};
var Images = [
  {
    info: "",
    image: "/chat_app_1.png",
  },
  {
    info: "",
    image: "/chat_app_2.png",
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
        <p>
          I have been developing mobile apps for iOS and Android for about 2
          years now
        </p>
        <p>
          I use Flutter and React native to build professional high end , user
          interactive and performant applications
        </p>
        <p>
          In case you need my app development services you can contact me by
          clicking the button below
        </p>
      </div>

      <div>
        <span className="text-green-400 text-lg "> Projects</span>
        <ImageViewer
          images={Images}
          title="Dissolve Chat app"
          description="Dissolve chat app is a chat application where you sign in with email and password and then you can chat , share photos , gifs, emojis with your friends"
        />
        <ImageViewer
          images={Images}
          title="Ribrad Laundry app"
          description="Dissolve chat app is a chat application where you sign in with email and password and then you can chat , share photos , gifs, emojis with your friends"
        />
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
    <div>
      <span className="text-cyan-400 text-xl font-bold rulr_text ">
        {title}
      </span>
      <div className="h-1 w-44 bg-white rounded-md rulr_item"></div>
    </div>
  );
};
const Rule = () => {
  return <div className="h-1 w-44 bg-white rounded-md"></div>;
};

const WebDev = () => (
  <div className="text-gray-100">
    <RuledTitle title="Web development" />

    <div className="mt-4">
      <p>
        I have been developing mobile apps for iOS and Android for about 2 years
        now
      </p>
      <p>
        I use Flutter and React native to build professional high end , user
        interactive and performant applications
      </p>
      <p>
        In case you need my app development services you can contact me by
        clicking the button below
      </p>
    </div>

    <div>
      <span className="text-white font-bold mt-2 text-lg "> Projects</span>
      <div className="flex flex-row mt-2">
        <ImageViewer
          images={Images}
          title="Dissolve Chat app"
          description="Dissolve chat app is a chat application where you sign in with email and password and then you can chat , share photos , gifs, emojis with your friends"
        />
        <ImageViewer
          images={Images}
          title="Ribrad Laundry app"
          description="Dissolve chat app is a chat application where you sign in with email and password and then you can chat , share photos , gifs, emojis with your friends"
        />
      </div>
    </div>
  </div>
);

const Design = () => (
  <div className="text-gray-100">
    <RuledTitle title="Design" />
    <div className="mt-4">
      <p>
        I design websites , mobile applications , posters , banners and flyers
        and even products
      </p>
      <p>
        I primarily use Figma for design , together with other video and photo
        editing software.
      </p>
    </div>

    <div>
      <span className="text-transparent font-bold text-lg bg-transparent bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text fill-transparent mt-3">
        Design Projects
      </span>
      <div className="flex flex-row mt-2">
        <ImageViewer
          images={Images}
          title="Dissolve Chat app"
          description="Dissolve chat app is a chat application where you sign in with email and password and then you can chat , share photos , gifs, emojis with your friends"
        />
        <ImageViewer
          images={Images}
          title="Ribrad Laundry app"
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
        className="abt_item"
        onClick={() => {
          setActiveItem(resolver);
        }}
      >
        <span
          className={[`${ColorResolver(resolver)}`, styles.work_link].join(" ")}
        >
          {name}
        </span>
      </li>
    );
  };
  return (
    <div>
      <h1 className="abt_heading font-bold text-2xl text-white relative ">
        About me
      </h1>
      <div className="flex flex-row flex-nowrap">
        <div>
          <div
            className={[
              ``,
              " w-[26vw] bg-black bg-opacity-20 h-full items-center flex flex-col",
            ].join(" ")}
          >
            <ul className="mt-44">
              <Item name="App developer" resolver="app" />
              <Item name="Web developer" resolver="web" />
              <Item name="Designer" resolver="design" />
            </ul>
          </div>
        </div>
        <div className="h-[80vh] w-[70vw]  bg-gray-400 bg-opacity-10 backdrop-blur-md rounded-md">
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
