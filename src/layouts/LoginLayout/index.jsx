import PropTypes from "prop-types";
import React from "react";

function LoginLayout(props) {
  const { left, right } = props;

  return (
    <div className="h-[100vh] flex flex-row">
      <div className="h-full w-[50%] bg-dark-mode-body text-white">{left}</div>
      <div className="h-full w-[50%] bg-white text-black">{right}</div>
    </div>
  );
}

LoginLayout.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};

export default LoginLayout;
