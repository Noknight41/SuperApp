import React from "react";
import { useNavigate } from "react-router-dom";

import { CustomerLayout, Headline, AppCard } from "components";

function GamesAppPage() {
  const navigate = useNavigate();
  return (
    <CustomerLayout customer="for Games">
      <div className="max-w-screen-xl px-4 py-16 mx-auto lg:h-[90%] lg:max-h-[90vh] lg:items-center flex flex-col text-center justify-center">
        <Headline
          first="What can you do with SuperApp for Games ?"
          second="Design a logo for your small business or a photo collage of your big dream. Warm up a cool image in a snap. Edit a social video or a blockbuster movie. Whatever you want to create, we have what you need to make it amazing."
          allClass="font-[500]"
        />
        <div className="w-full mt-20 grid grid-cols-appcard gap-5">
          <AppCard icon="🔤" name="Wordle" onClick={() => navigate("/clock")} />
          <AppCard icon="🔢" name="2048" onClick={() => navigate("/todo")} />
        </div>
      </div>
    </CustomerLayout>
  );
}

export default GamesAppPage;
