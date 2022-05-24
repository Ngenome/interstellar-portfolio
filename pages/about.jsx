import { useModals } from "@mantine/modals";
import { useState } from "react";
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
                    className=" m-1 h-[67vh]  object-contain"
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
const AppDev = () => (
  <div className="text-gray-100">
    <span className="text-cyan-400 text-xl "> App development</span>
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

const WebDev = () => (
  <div className="text-gray-100">
    <span className="text-cyan-400 text-xl "> Web development</span>
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

const Design = () => (
  <div className="text-gray-100">
    <span className="text-cyan-400 text-xl "> Design</span>
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
const AboutPage = () => {
  const [activeItem, setActiveItem] = useState("design");
  function ColorResolver(e) {
    return activeItem == e ? "text-cyan-300" : "text-white";
  }
  const Item = ({ name, resolver }) => {
    return (
      <li
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
      <h1 className="font-bold text-2xl text-white relative ">About me</h1>
      <div className="flex flex-row flex-nowrap">
        <div>
          <div className={[``, " mt-10 w-[26vw] "].join(" ")}>
            <ul>
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
