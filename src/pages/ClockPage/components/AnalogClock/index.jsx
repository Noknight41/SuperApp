import PropTypes from "prop-types";
import React from "react";

function AnalogClock(props) {
  const { hh, mm, ss } = props;

  return (
    <div className="relative w-[300px] h-[300px] rounded-[50%] flex justify-self-center justify-center items-center box shadow-lg shadow-cyan-500/50">
      <span className="bg-first-color w-6 h-1 absolute top-5 left-[50%] translate-x-[-50%] rotate-90" />
      <span className="bg-first-color w-6 h-1 absolute top-[50%] left-5 " />
      <span className="bg-first-color w-6 h-1 absolute bottom-5 left-[50%] translate-x-[-50%] rotate-90" />
      <span className="bg-first-color w-6 h-1 absolute top-[50%] right-5 " />

      <div
        className="absolute bottom-[149px] w-1 h-[80px] bg-black origin-bottom"
        style={{ transform: `rotateZ(${hh * 30 + mm / 2}deg)` }}
      />
      <div
        className="absolute bottom-[149px] w-1 h-[100px] bg-black origin-bottom"
        style={{ transform: `rotateZ(${mm * 6}deg)` }}
      />
      <div
        className="absolute bottom-[149px] w-1 h-[100px] bg-first-color origin-bottom"
        style={{ transform: `rotateZ(${ss * 6}deg)` }}
      />
    </div>
  );
}

AnalogClock.propTypes = {
  hh: PropTypes.string.isRequired,
  mm: PropTypes.string.isRequired,
  ss: PropTypes.string.isRequired,
};

export default AnalogClock;
