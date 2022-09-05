import React from "react";

import { UnderConstruction } from "components";
import { AppLayout } from "layouts";

function WordlePage() {
  return (
    <AppLayout pageName="Wordle">
      <div className="flex items-center justify-center min-h-[80vh]">
        <UnderConstruction />
      </div>
    </AppLayout>
  );
}

export default WordlePage;
