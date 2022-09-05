import React from "react";

import { UnderConstruction } from "components";
import { AppLayout } from "layouts";

function Two048Page() {
  return (
    <AppLayout pageName="2048">
      <div className="flex items-center justify-center min-h-[80vh]">
        <UnderConstruction />
      </div>
    </AppLayout>
  );
}

export default Two048Page;
