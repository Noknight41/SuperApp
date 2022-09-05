import React from "react";
import "./index.css";

import { UnderConstruction } from "components";
import { HomeLayout } from "layouts";

function HomePage() {
  return (
    <HomeLayout>
      <div className="flex items-center justify-center min-h-[80vh]">
        <UnderConstruction />
      </div>
    </HomeLayout>
  );
}

export default HomePage;
