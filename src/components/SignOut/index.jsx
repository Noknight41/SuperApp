import React from "react";

import { auth } from "services/firebase";

function SignOut() {
  return (
    <button
      type="button"
      className="bg-gray-900 border-none text-white py-4 mx-8 text-center no-underline inline-block cursor-pointer text-xl"
      onClick={() => auth?.signOut()}
    >
      Sign Out
    </button>
  );
}

export default SignOut;
