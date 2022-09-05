import PropTypes from "prop-types";
import React from "react";
import { MdContentCopy } from "react-icons/md";
import { toast } from "react-toastify";

class PassGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { password } = this.props;

    return (
      <div className="flex flex-wrap flex-row justify-center mt-8">
        <div className="flex flex-row w-full ">
          <input
            type="text"
            readOnly
            className="input-lg focus:outline-none w-full text-black text-[24px]"
            value={password}
          />
          <button
            type="button"
            className="bg-white w-10 right-0"
            onClick={() => {
              navigator.clipboard.writeText(password);
              toast("Copy to Clipboard", { position: "top-center" });
            }}
          >
            <MdContentCopy />
          </button>
        </div>

        <progress
          className="progress progress-accent w-full"
          value={100}
          max="100"
        />
      </div>
    );
  }
}

PassGen.propTypes = {
  password: PropTypes.string,
};

PassGen.defaultProps = {
  password: "",
};

export default PassGen;
