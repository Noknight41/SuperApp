import PropTypes from "prop-types";
import React from "react";

import utils from "helpers/utils";

function BinaryClock(props) {
  const { hh, mm, ss } = props;

  return (
    <div className="w-[80%] grid grid-cols-6 gap-6 justify-items-center">
      {utils.formatBinary(hh, mm, ss).map((bit) => (
        <div
          className={`${
            bit ? "bg-[#81A2BE]" : "bg-[#373B41]"
          } h-[90px] w-[90px] rounded-xl`}
        />
      ))}
    </div>
  );
}

BinaryClock.propTypes = {
  hh: PropTypes.string.isRequired,
  mm: PropTypes.string.isRequired,
  ss: PropTypes.string.isRequired,
};

export default BinaryClock;
