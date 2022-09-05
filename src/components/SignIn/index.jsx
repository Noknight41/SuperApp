import PropTypes from "prop-types";
import React from "react";

function SignIn(props) {
  const { signInWith, method } = props;

  return (
    <button
      type="button"
      className="text-gray-900 bg-light-mode-body max-w-[400px] my-0 mx-auto text-xl py-4 px-8 text-center border border-indigo-500/50 rounded-lg"
      onClick={signInWith}
    >
      Sign in with {method}
    </button>
  );
}

SignIn.propTypes = {
  signInWith: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default SignIn;
