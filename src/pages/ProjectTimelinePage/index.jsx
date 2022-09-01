import React from "react";
import { Chrono } from "react-chrono";

import data from "data/timeline.json";
import { AppLayout } from "layouts";

function ProjectTimelinePage(props) {
  return (
    <AppLayout pageName="Project Timeline">
      <div className="space-y-4 w-full flex flex-col items-center justify-center gap-5 pb-10">
        <h2 className="text-2xl font-bold md:text-3xl mt-10">
          Project Timeline
        </h2>
        <div className="relative overflow-scroll w-[900px] h-[700px] dead">
          <Chrono
            items={data}
            mode="VERTICAL_ALTERNATING"
            cardHeight={150}
            cardWidth={600}
            theme={{
              primary: "black",
              secondary: "white",
              cardBgColor: "white",
              cardForeColor: "black",
              titleColor: "rgb(59,130,246)",
              titleColorActive: "black",
            }}
          >
            {data.map((item) => (
              <div className="text-black h-full">
                {item.work.map((work) => (
                  <h1>{work}</h1>
                ))}
              </div>
            ))}
          </Chrono>
        </div>
      </div>
    </AppLayout>
  );
}

export default ProjectTimelinePage;
