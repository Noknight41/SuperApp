import PropTypes from "prop-types";
import React from "react";

import Google from "assets/images/google.png";
import { signInWithGoogle } from "services/firebase";

function SignInSection(props) {
  const { mode } = props;
  return (
    <>
      <div
        className={`${
          mode === "light" ? "flex dark:hidden " : "hidden dark:flex"
        } flex-col h-full items-center text-center justify-center`}
      >
        <div className="h-[10%]">
          <h1 className="text-[2rem] font-black">All Needs. One App</h1>
        </div>
        <div className="flex flex-row">
          <p>
            A full-value product that supports every need in your daily life and
            work.
          </p>
        </div>
      </div>
      <div
        className={`${
          mode === "dark" ? "flex dark:hidden " : "hidden dark:flex"
        } flex-col h-full items-center text-center justify-center`}
      >
        <div className="h-[10%]">
          <h1 className="text-[2rem] font-black">Sign In to Super App</h1>
        </div>
        <div className="flex flex-col">
          <button
            type="button"
            className="flex flex-row gap-x-3 text-gray-900 bg-light-mode-body max-w-[400px] my-0 mx-auto text-xl py-4 px-8 text-center border border-indigo-500/50 rounded-lg"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            <img src={Google} alt="Google" width={30} height={30} />
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}

SignInSection.propTypes = {
  mode: PropTypes.func.isRequired,
};

export default SignInSection;
