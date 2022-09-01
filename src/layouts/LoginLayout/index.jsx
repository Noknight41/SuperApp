import PropTypes from "prop-types";
import React from "react";

function LoginLayout(props) {
  const { children } = props;

  return (
    <div className="h-full">
      <div className="flex justify-center">
        <div className="fixed bg-white top-[100px] bottom-[100px] flex flex-col items-center justify-center w-full max-w-3xl px-[30px] pt-[20px] pb-[30px] rounded-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginLayout;
