import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { AvatarDropDown } from "components";
import { useDetectOutsideClick } from "hooks";

function CustomerLayout(props) {
  const { customer, children } = props;
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClickOutside = () => setIsActive(!isActive);

  return (
    <div className="min-h-[100vh] h-full">
      <div className="bg-transparent min-h-[10vh] w-full top-0 flex items-center justify-between py-2 px-10 box-border text-[24px] z-10">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="pr-5 text-blue-600 font-bold border-r border-blue-500"
            onClick={() => navigate("/home")}
          >
            Super{" "}
            <span className=" text-slate-100 font-bold bg-blue-600 px-1 ml-1 rounded-md drop-shadow-lg ">
              App
            </span>
          </button>
          <h1 className="px-5 text-blue-600 font-bold">{customer}</h1>
        </div>

        <div className="flex justify-between items-center gap-x-5">
          <AvatarDropDown
            onClickOutside={onClickOutside}
            isActive={isActive}
            dropdownRef={dropdownRef}
          />
        </div>
      </div>
      {children}
    </div>
  );
}

CustomerLayout.propTypes = {
  children: PropTypes.element.isRequired,
  customer: PropTypes.string.isRequired,
};

export default CustomerLayout;
