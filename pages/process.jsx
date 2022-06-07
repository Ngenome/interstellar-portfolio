import React from "react";
import gsap from "gsap";
import { Stepper, Button, Group } from "@mantine/core";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

var items = [
  {
    name: "Research and Planning",

    steps: [
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
    ],
    image: "/planning.svg",
  },
  {
    name: "Implementation",
    steps: [
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
    ],
    image: "/code_in_action.svg",
  },
  {
    name: "Testing and review",
    steps: [
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?`,
    ],
    image: "/review.svg",
  },
  {
    name: "Deployment",

    steps: [
      ` Deployment starts after the code is appropriately tested, approved for release, and sold or otherwise distributed into a production environment. This may involve installation, customization, testing, and possibly an extended period of evaluation. Software training and support are important, as the software is only effective if it is used correctly. Maintaining and enhancing software to cope with newly discovered faults or requirements can take substantial time and effort, as missed requirements may force a redesign of the software. [1]`,
    ],
    image: "/deploy.svg",
  },
];
//e.name==active?

function getActiveObject(array, property) {
  var x = null;
  array.map((e, i) => {
    if (e[property.name] == property.value) {
      x = i;
    }
  });
  return x;
}
export default function Process() {
  const [active, setActive] = useState(items[0].name);
  const [activeIndex, setActiveIndex] = useState(0);
  var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  React.useEffect(() => {
    // // tl.to("#processes_title", { x: 50, duration: 0.4 });
    // tl.to("#id", { y: 50, duration: 1 });
    // tl.to("#id", { opacity: 0, duration: 1 });
    // tl.call();
    // // th we can control the whole thing easily...
    // tl.pause();
    // tl.resume();
    // tl.seek(1.5);
    // tl.reverse();
  }, []);
  React.useEffect(() => {
    gsap.fromTo(
      ".process_heading",
      {
        x: -20,
      },
      {
        x: 0,
        duration: 0.5,
      }
    );

    gsap.fromTo(
      ".custom_step_paragraph",
      {
        x: -10,
      },
      {
        x: 0,
        duration: 0.2,
        // delay: 0.3
        stagger: 0.13,
      }
    );
    gsap.fromTo(
      ".process_illustration",
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        // delay: 0.3
        stagger: 0.13,
      }
    );
  }, [active]);
  const Heading = ({ number, text }) => {
    return (
      <div className="flex flex-row items-baseline mt-4 process_heading ">
        <div className="h-30 w-10 rounded-sm">
          <span className="font-bold text-3xl">{number}</span>
        </div>
        <h2 className="ml-3 text-white font-bold  text-2xl">{text}</h2>
      </div>
    );
  };
  const CustomParagraph = () => {
    return (
      <p className="my-2 custom_step_paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate in
        voluptatum iusto distinctio magni ratione? Recusandae ducimus fugiat
        quod, ex dignissimos vel ipsam tempora repellendus, veniam eos natus?
        Ullam, dolore?
      </p>
    );
  };
  return (
    <div className="h-[90vh] w-[100vw] ">
      <div className="w-[300px] h-[300px] rounded-full absolute bg-blue-600 -z-10 -left-20"></div>
      <div className="w-[300px] h-[300px] rounded-full absolute bg-blue-600 -z-10 -bottom-20 -right-12"></div>
      <h1 id="processes_title" className="text-cyan-100 text-xl font-bold">
        How I handle client projects
      </h1>
      <div className="flex flex-row justify-center">
        <div>
          <Heading
            number={activeIndex}
            text={
              items[
                getActiveObject(items, {
                  name: "name",
                  value: active,
                })
              ]?.name
            }
          />
          <div className=" flex flex-col  w-[90vw] h-[70vh] items-center bg-black bg-opacity-10 justify-around backdrop-blur-2xl rounded-sm">
            <div className="flex flex-row">
              <div className="w-[46vw] text-white p-2">
                {items.map((e, i) => {
                  if (e.name == active) {
                    return e.steps.map((e, i) => {
                      return <CustomParagraph key={i} />;
                    });
                  }
                })}
              </div>
              <div>
                <img
                  src={
                    items[
                      getActiveObject(items, {
                        name: "name",
                        value: active,
                      })
                    ]?.image
                  }
                  className="w-[35vw] process_illustration"
                />
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="flex flex-row ">
                {items.map((e, i) => {
                  return (
                    <div
                      onClick={() => {
                        setActive(e.name);
                        setActiveIndex(i);
                      }}
                      className={`h-3 w-3 m-1 ${
                        e.name == active ? "bg-blue-400 " : "bg-white"
                      }  rounded-full`}
                    ></div>
                  );
                })}
              </div>

              <div className="flex flex-row">
                <ChevronLeft
                  color="white"
                  height={20}
                  onClick={() => {
                    if (
                      getActiveObject(items, {
                        name: "name",
                        value: active,
                      }) <= 0
                    ) {
                      setActive(items[items.length - 1]?.name);
                      setActiveIndex(items.length - 1);
                    } else {
                      setActive(
                        items[
                          getActiveObject(items, {
                            name: "name",
                            value: active,
                          }) - 1
                        ]?.name
                      );
                      setActiveIndex(activeIndex - 1);
                    }
                  }}
                />
                <ChevronRight
                  color="white"
                  height={20}
                  onClick={() => {
                    if (
                      getActiveObject(items, {
                        name: "name",
                        value: active,
                      }) ==
                      items.length - 1
                    ) {
                      setActive(items[0]?.name);
                      setActiveIndex(0);
                    } else {
                      setActive(
                        items[
                          getActiveObject(items, {
                            name: "name",
                            value: active,
                          }) + 1
                        ]?.name
                      );
                      setActiveIndex(activeIndex + 1);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Steps() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        className="w-screen"
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
      >
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
