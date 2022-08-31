import PropTypes from "prop-types";
import React from "react";

function Button(props) {
  const { className, content, ...inputProps } = props;

  return (
    <button
      type="button"
      className={`bg-transparent border-none text-white py-4 px-8 text-center no-underline inline-block cursor-pointer text-xl ${className}`}
      {...inputProps}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  content: "Button",
};

export default Button;
