import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DiceImage from "assets/images/icon-dice.svg";
import { AvatarDropDown } from "components";
import { useDetectOutsideClick } from "hooks";
import AdviceAPI from "services/advice.service";

function HomeLayout(props) {
  const navigate = useNavigate();
  const { children } = props;

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClickOutside = () => setIsActive(!isActive);

  return (
    <div className="min-h-[100vh] h-full bg-transparent">
      <nav className="bg-transparent min-h-[10vh] w-full top-0 flex items-center justify-between py-2 px-10 box-border text-[24px] z-10">
        <div className="flex justify-between items-center gap-x-7">
          <h1 className="text-blue-600 font-bold mr-8">
            Super{" "}
            <span className=" text-slate-100 font-bold bg-blue-600 px-1 ml-1 rounded-md drop-shadow-lg ">
              App
            </span>
          </h1>
          <button
            type="button"
            className="text-blue-600 py-1 font-light text-xl"
            onClick={() => navigate("/personal")}
          >
            <div className="basic-3 pb-1">Personal</div>
          </button>
          <button
            type="button"
            className="text-blue-600 py-1 font-light text-xl basic-3"
            onClick={() => navigate("/game")}
          >
            <div className="basic-3 pb-1">Games</div>
          </button>
          <button
            type="button"
            className="text-blue-600 py-1 font-light text-xl basic-3"
            onClick={() => navigate("/social")}
          >
            <div className="basic-3 pb-1">Social</div>
          </button>
          <button
            type="button"
            className="text-blue-600 py-1 font-light text-xl basic-3"
            onClick={() => navigate("/dev")}
          >
            <div className="basic-3 pb-1">Developer</div>
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-5">
          <button
            type="button"
            content="Home"
            className="bg-blue-600 p-2 justify-center rounded-[50%] hover:shadow-dice transition-all duration-100"
            onClick={async () => {
              toast.promise(
                AdviceAPI.getAdvice(),
                {
                  pending: "Promise is pending",
                  success: {
                    render({ data }) {
                      return data.data.slip.advice;
                    },
                  },
                  error: "Promise rejected 🤯",
                },
                { position: "top-center" }
              );
            }}
          >
            <img src={DiceImage} alt="Dice" />
          </button>
          <AvatarDropDown
            onClickOutside={onClickOutside}
            isActive={isActive}
            dropdownRef={dropdownRef}
          />
        </div>
      </nav>
      {children}
    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HomeLayout;
