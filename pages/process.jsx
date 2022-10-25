import React from "react";
import gsap from "gsap";
import { Stepper, Button, Group } from "@mantine/core";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

var items = [
  {
    name: "Research and Planning",

    steps: [
      `  Having been given the project details by the customer , I start off by first researching more about the project idea, both on the internet and in the sorrounding environment. `,
      ` After gathering some more important information about the project, I then decide on the best tools to use to implement the project`,
      `After decideing on the right tools, I then do a rough sketch of the flow of the application , trying to imagine all the actions that the users of the application will do`,
    ],
    image: "/planning.svg",
  },
  {
    name: "Implementation",
    steps: [
      `  Implementation starts off with designing the application to get a mockup of how the real application will be, the various themes, colors , layout and the flow of the application, `,
      ` `,
      ,
    ],
    image: "/code_in_action.svg",
  },
  {
    name: "Testing and review",
    steps: [
      ` Finally I test the application to see whether everything works , and I get from people to get Ideas on possible areas of correction`,
      `  We then review the application and if all is well we head to the next stage`,
      ,
    ],
    image: "/review.svg",
  },
  {
    name: "Deployment",

    steps: [
      ` Once all is done, and everything is approved to be working all right, we then put your application to Production`,
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
const Navigation = ({ setActive, setActiveIndex, active, activeIndex }) => {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-row ">
        {items.map((e, i) => {
          return (
            <div
              key={i}
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
  );
};
export default function Process() {
  const [active, setActive] = useState(items[0].name);
  const [activeIndex, setActiveIndex] = useState(0);
  var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  React.useEffect(() => {}, []);
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
      <div className="flex flex-row w-screen sm:w-fit items-baseline mt-4 process_heading ">
        <div className="h-30 w-10 rounded-sm ml-14">
          <span className="font-bold text-3xl">{number}</span>
        </div>
        <h2 className="ml-3 text-white font-bold  text-2xl">{text}</h2>
      </div>
    );
  };
  const CustomParagraph = ({ text }) => {
    return <p className="my-2 text-sm">{text}</p>;
  };
  return (
    <div className="sm:h-[90vh] overflow-y-scroll w-[100vw]">
      <h1 id="processes_title" className="text-cyan-100 text-xl font-bold">
        How I handle client projects
      </h1>
      <div className="flex flex-row justify-center  ">
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
          <div className="w-[100vw] flex justify-center">
            <Navigation
              setActive={setActive}
              setActiveIndex={setActiveIndex}
              active={active}
              activeIndex={activeIndex}
            />
          </div>

          <div className=" flex flex-col w-[100vw] overflow-y-scroll sm:w-[90vw] min-h-screen sm:h-[70vh] items-center bg-black bg-opacity-10 justify-around backdrop-blur-2xl rounded-sm">
            <div className="flex flex-col sm:flex-row ">
              <div className="w-[100vw] sm:w-[46vw] text-white p-2">
                {items.map((e, i) => {
                  if (e.name == active) {
                    return e.steps.map((e, i) => {
                      return <CustomParagraph key={i} text={e} />;
                    });
                  }
                })}
              </div>
              <div className="mb-72 sm:mb-0">
                <img
                  src={
                    items[
                      getActiveObject(items, {
                        name: "name",
                        value: active,
                      })
                    ]?.image
                  }
                  className="w-[100vw] sm:w-[35vw] process_illustration"
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
