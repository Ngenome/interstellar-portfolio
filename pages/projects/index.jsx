import React from "react";
import data from "../../data";

export default function ProjectsPage() {
  return (
    <div>
      <div className="container my-4 px-6 mx-auto overflow-scroll z-10 h-[90vh]">
        <section className="mb-32 text-white">
          <style></style>

          <h2 className="text-3xl font-medium mb-12 text-center">
            Projects I am<u className="text-blue-300"> proud of</u>
          </h2>

          <div className="grid lg:grid-cols-3 gap-6  ">
            {data.projects.map((e, i) => {
              return (
                <a key={i} href={`projects/${e.id}`}>
                  <div
                    className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                    style={{ backgroundPosition: "50%" }}
                  >
                    <img
                      src={e.cover}
                      className="w-full transition duration-300 ease-linear align-middle"
                    />

                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
                    >
                      <div className="flex justify-start items-end h-full">
                        <h5 className="text-lg font-bold text-white m-6">
                          {e.info}
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                        style={{
                          backgroundColor: "rgba(253, 253, 253, 0.05)",
                        }}
                      ></div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
