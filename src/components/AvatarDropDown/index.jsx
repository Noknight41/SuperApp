import PropTypes from "prop-types";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { auth } from "services/firebase";

function AvatarDropDown(props) {
  const navigate = useNavigate();
  const { onClickOutside, dropdownRef, isActive } = props;

  return (
    <div className="pl-5 rounded-[10px]">
      <button
        ref={dropdownRef}
        type="button"
        onClick={onClickOutside}
        className="flex flex-row justify-center items-center gap-x-5 px-3 py-2 rounded-2xl group"
      >
        <img
          className="rounded-[50%] w-[50px]"
          src={
            auth.currentUser?.photoURL || "https://placeimg.com/192/192/people"
          }
          alt="User avatar"
        />
      </button>
      <nav
        className={`absolute flex flex-col px-5 py-3 gap-x-10 gap-y-2 min-w-[300px] rounded-3xl bg-white dark:bg-dark-mode-shadow right-[40px] ${
          isActive ? "opacity-100 visible" : "opacity-0 hidden"
        }`}
      >
        <button
          type="button"
          className="flex flex-row justify-start gap-x-7 py-3 px-5 items-center min-h-[50px] rounded-xl transition-all hover:bg-light-mode-body dark:hover:bg-slate-700 "
          onClick={() => navigate("/profile")}
        >
          <img
            className="rounded-[50%] w-[40px]"
            src={
              auth.currentUser?.photoURL ||
              "https://placeimg.com/192/192/people"
            }
            alt="User avatar"
          />
          <span className="text-[18px]">
            {auth.currentUser?.displayName || "User"}
          </span>
        </button>
        <button
          type="button"
          className="flex flex-row justify-start gap-x-7 py-3 px-5 items-center text-[18px] rounded-xl transition-all hover:bg-light-mode-body dark:hover:bg-slate-700"
          onClick={() => auth?.signOut()}
        >
          <AiOutlineLogout />
          Sign Out
        </button>
      </nav>
    </div>
  );
}

AvatarDropDown.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  dropdownRef: PropTypes.func.isRequired,
};

export default AvatarDropDown;
