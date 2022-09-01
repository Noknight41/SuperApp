import React from "react";

import Equilibrium from "assets/images/image-equilibrium.jpg";
import { AppLayout } from "layouts";
import { auth } from "services/firebase";

import { TrophyCard } from "./components";

function TrophyPage() {
  const { photoURL, displayName } = auth.currentUser;

  return (
    <AppLayout pageName="SuperTrophy">
      <div className="flex h-[90%] flex-wrap flex-row items-center justify-center pt-[100px] px-0 font-[18px] gap-x-12 dead">
        <TrophyCard
          image={Equilibrium}
          avatar={photoURL}
          creator={displayName}
          rarity="animate-UR-flashing"
        />
        <TrophyCard
          image={Equilibrium}
          avatar={photoURL}
          creator={displayName}
          rarity="animate-SR-flashing"
        />
      </div>
    </AppLayout>
  );
}

export default TrophyPage;
