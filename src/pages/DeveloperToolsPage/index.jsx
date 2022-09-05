import React from "react";

import { UnderConstruction } from "components";
import { AppLayout } from "layouts";

function DeveloperToolsPage() {
  return (
    <AppLayout pageName="Developer's Tools">
      <div className="flex items-center justify-center min-h-[80vh]">
        <UnderConstruction />
      </div>
    </AppLayout>
  );
}

export default DeveloperToolsPage;
