import { useModals } from "@mantine/modals";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Popover } from "@mantine/core";

const skillItems = [
  {
    name: "figma",
    image: "/tech/Figma.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "Blender",
    image: "/tech/blender.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "flutter",
    image: "/tech/flutter.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "React ",
    image: "/tech/react.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "ReactNative",
    image: "/tech/reactnative.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "Next js ",
    image: "/tech/nextjs.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "Django",
    image: "/tech/django.svg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "Django rest framework",
    image: "/tech/drf.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "Git",
    image: "/tech/git.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "Linux",
    image: "/tech/linux.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
  {
    name: "Python",
    image: "/tech/python.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus non eos tempora atque ducimus molestiae voluptates nesciunt ullam officiis reprehenderit nam dicta. Non corrupti ab fuga modi velit excepturi?",
  },
];
const ViewImages = {
  blender: ["/tech/blenderphotorealism.jpeg", "/tech/blender2.jpeg"],
  flutter: ["/tech/blenderphotorealism.jpeg"],
  figma: ["/tech/blenderphotorealism.jpeg"],
  react: ["/tech/blenderphotorealism.jpeg"],
  reactnative: ["/tech/blenderphotorealism.jpeg"],
  git: ["/tech/blenderphotorealism.jpeg"],
  nextjs: ["/tech/blenderphotorealism.jpeg"],
  django: ["/tech/blenderphotorealism.jpeg"],
  djangorestframework: ["/tech/blenderphotorealism.jpeg"],
  python: ["/tech/blenderphotorealism.jpeg"],
  linux: ["/tech/blenderphotorealism.jpeg"],
};
const AboutPage = () => {
  const [activeItem, setActiveItem] = useState(null);
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
    <div className="skillItem w-[100vw] overflow-x-hidden">
      <h1 className="font-bold text-2xl text-white relative ">My skillset</h1>
      <div className=" flex flex-row h-[65vh] justify-center items-center content-center align-middle">
        <div className="grid-container ">
          {skillItems.map((e, i) => {
            return (
              <Skillset
                setState={setActiveItem}
                state={activeItem}
                key={i}
                image={e.image}
                description={e.description}
                name={e.name}
              />
            );
          })}
        </div>
        {/* <div className=" bg-opacity-10 h-full relative">
          <h1 className="text-gray-800 opacity-40  text-[30vw] absolute z-1  ">
            {activeItem?.name}
          </h1>
          <div className="bg-gray-900 bg-opacity-70  h-full w-full relative z-2 ">
            <h1 className=" text-3xl text-white relative mt-4 ">
              {activeItem?.name.replace(
                activeItem?.name[0],
                activeItem?.name[0].toUpperCase()
              )}
            </h1>
            <div className="flex flex-row justify-between">
              <div className="w-[30vw]">
                <p className="text-gray-100 mt-2">{activeItem?.description}</p>
              </div>
              <div>
                {activeItem &&
                  ViewImages[
                    activeItem?.name.toLowerCase().trim().replace(" ", "")
                  ].map((e, i) => {
                    return (
                      <div key={i}>
                        <img
                          src={`${e}`}
                          className="w-[25vw]  object-cover  border-cyan-600 border-2"
                        />
                      </div>
                    );
                  })}

                {}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;

const Skillset = ({ image, name, description, setState }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div class="entry">
      <div class="entry-content">
        <img src={image} className="object-contain h-[80px] " alt="name" />
      </div>
      <div class="corner-container">
        <span class="corner"></span>
        <span class="corner"></span>
        <span class="corner"></span>
        <span class="corner"></span>
      </div>
    </div>
  );
};
