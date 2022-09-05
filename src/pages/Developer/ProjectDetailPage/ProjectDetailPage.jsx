import React from "react";

import { CollapseMarkdown } from "components";
import { AppLayout } from "layouts";

class ProjectDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppLayout pageName="Project's Detail">
        <div className="space-y-4 w-full flex flex-col items-center justify-center gap-5 pb-10">
          <h2 className="text-2xl font-bold md:text-3xl mt-10">
            Idea and Inspiration for My Super App
          </h2>
          <div className="flex flex-col min-w-[60%] gap-5 dead">
            <CollapseMarkdown title="Clock Page">
              - Inspiration from{" "}
              <a
                className="font-bold text-Very-dark-blue-line underline"
                href="https://clock.sasaya.me/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              <br />- Select component in{" "}
              <a
                className="font-bold text-Very-dark-blue-line underline"
                href="https://react-select.com/home"
                target="_blank"
                rel="noreferrer"
              >
                React Select
              </a>
            </CollapseMarkdown>
            <CollapseMarkdown title="Chat Page">
              - Inspiration from{" "}
              <a
                className="font-bold text-Very-dark-blue-line underline"
                href="https://fireship.io/"
                target="_blank"
                rel="noreferrer"
              >
                Fireship.io
              </a>{" "}
              <br />
              - Expand further by the Hang Rongs Cafe UI
              <br />- Backend by Firebase
            </CollapseMarkdown>
            <CollapseMarkdown title="To Do Page">
              - Inspiration from every tutorial ever
              <br />- UI Inspiration from{" "}
              <a
                className="font-bold text-Very-dark-blue-line underline"
                href="https://iamkk25.github.io/frontend-mentor-todo-app/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>{" "}
              <br />- Use{" "}
              <a
                className="font-bold text-Very-dark-blue-line underline"
                href="https://daisyui.com/"
                target="_blank"
                rel="noreferrer"
              >
                Daisy UI
              </a>{" "}
            </CollapseMarkdown>
            <CollapseMarkdown title="Trophy Page">
              - Inspiration from Front-End Mentor Website
            </CollapseMarkdown>
            <CollapseMarkdown title="Detail Page">
              - A Page to write all of this back
              <br />- Use{" "}
              <a
                className="font-bold text-Very-dark-blue-line underline"
                href="https://www.hyperui.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Hyper UI
              </a>{" "}
            </CollapseMarkdown>
            <CollapseMarkdown title="Password Page">
              - Inspiration from LastPass
              <br />- Use{" "}
              <a
                className="font-bold text-Very-dark-blue-line underline"
                href="https://daisyui.com/"
                target="_blank"
                rel="noreferrer"
              >
                Daisy UI
              </a>{" "}
            </CollapseMarkdown>
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default ProjectDetailPage;
