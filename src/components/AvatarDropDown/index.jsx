import PropTypes from "prop-types";
import React from "react";

import { auth } from "services/firebase";

class AvatarDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    const { navigate } = this.props;
    return (
      <button
        type="button"
        className="w-[50px] rounded-full overflow-hidden mx-4"
        onClick={() => this.setState({ open: !open })}
      >
        <img
          src={
            auth.currentUser?.photoURL || "https://placeimg.com/192/192/people"
          }
          alt="avatar"
        />
        {open && (
          <div className="absolute flex flex-col top-[88px] bg-light-mode-body z-20 text-[18px] w-[300px] translate-x-[-75%] rounded-[5px] border-slate-500 border">
            <button
              type="button"
              href="#"
              className="text-black py-5"
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>
            <button
              type="button"
              href="#"
              className="text-black py-5"
              onClick={() => auth?.signOut()}
            >
              Sign Out
            </button>
          </div>
        )}
      </button>
    );
  }
}

AvatarDropDown.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default AvatarDropDown;
