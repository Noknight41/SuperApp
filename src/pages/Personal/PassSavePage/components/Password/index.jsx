import PropTypes from "prop-types";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

import { firestore } from "services/firebase";

function Password(props) {
  const { name, id, password } = props;
  const passRef = firestore.collection("pass");

  const deletePass = async () => {
    await passRef.doc(id).delete();
    toast("Successfully delete password", { position: "top-center" });
  };

  return (
    <div className="rounded-lg bg-gray-50 group border-2 border-black flex flex-row justify-between">
      <button
        type="button"
        className="p-6 w-full flex items-center justify-between cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(password);
          toast("Copy to Clipboard", {
            position: "top-center",
            autoClose: 1000,
          });
        }}
      >
        <h1 className="font-bold text-gray-900 text-[20px]">{name}</h1>
      </button>
      <button
        type="button"
        className="flex justify-center items-center mx-2.5 w-[60px] h-full"
        onClick={async () => {
          await deletePass();
        }}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}

Password.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  password: PropTypes.string,
};

Password.defaultProps = {
  name: "Text",
  password: "",
};

export default Password;
