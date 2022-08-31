import PropTypes from "prop-types";
import React from "react";

function Emoji(props) {
  const { label, symbol } = props;
  return (
    <span
      className="text-3xl sm:text-4xl"
      role="img"
      aria-label={label && ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Emoji;
