import PropTypes from "prop-types";
import React from "react";

import utils from "helpers/utils";

function DigitalClock(props) {
  const { hh, mm, dd, M, yy } = props;

  return (
    <div>
      <div className="flex justify-center">
        <div className="text-6xl font-medium">{`${
          utils.formatDigital(hh, mm).hh
        }:`}</div>
        <div className="text-6xl font-medium">
          {utils.formatDigital(hh, mm).mm}
        </div>
        <div className="text-xl ml-[-2px]">
          {utils.formatDigital(hh, mm).ampm}
        </div>
      </div>
      <div className="flex justify-center ">
        <span className="text-[0.9rem] mx-1">{`${dd} `}</span>
        <span className="text-[0.9rem] mx-0.5">{`${M}, `}</span>
        <span className="text-[0.9rem] mx-1">{yy}</span>
      </div>
    </div>
  );
}

DigitalClock.propTypes = {
  hh: PropTypes.string.isRequired,
  mm: PropTypes.string.isRequired,
  dd: PropTypes.string.isRequired,
  M: PropTypes.string.isRequired,
  yy: PropTypes.string.isRequired,
};

export default DigitalClock;
