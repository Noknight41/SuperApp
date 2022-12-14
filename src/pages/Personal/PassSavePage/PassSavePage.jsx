import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";

import { AppLayout } from "layouts";
import { auth, firestore } from "services/firebase";

import { Password } from "./components";

function PassSavePage() {
  const navigate = useNavigate();
  const passRef = firestore.collection("pass");
  const [pws] = useCollectionData(
    passRef.where("uid", "==", auth.currentUser?.uid || ""),
    { idField: "id" }
  );

  return (
    <AppLayout pageName="Password Generator">
      <div className="space-y-4 w-full flex flex-col items-center justify-center gap-5 pb-10">
        <h2 className="text-2xl font-bold md:text-3xl mt-10">My Password</h2>
        <div className="w-[60%] grid grid-cols-passcard gap-5 dead">
          {(pws || []).map((password) => (
            <Password
              name={password.name}
              password={password.password}
              id={password.id}
            />
          ))}
          <button
            onClick={() => navigate("/pass/gen")}
            type="button"
            className=" rounded-lg border-dashed border-2 border-gray-400 flex justify-center items-center text-[40px] font-bold"
          >
            +
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

export default PassSavePage;
