import PropTypes from "prop-types";
import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { toast } from "react-toastify";

function ToDoInput(props) {
  const { addToDo, ...inputProps } = props;

  const [text, setText] = useState("");

  const pushToDo = async (e) => {
    e.preventDefault();
    if (text !== "") {
      await addToDo(text);
      setText("");
    } else {
      toast("Please add the name of the task !", {
        position: "top-center",
        type: "error",
        autoClose: 1000,
      });
    }
  };

  return (
    <form
      onSubmit={pushToDo}
      className="flex w-full items-center justify-around h-[60px] font-[700] text-dark-mode-body dark:text-light-mode-body bg-white dark:bg-slate-600"
    >
      <input
        type="checkbox"
        disabled
        className="checkbox checkbox-accent hover: cursor-default"
      />
      <input
        type="text"
        className="bg-transparent focus:outline-none w-[500px]"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new To Do"
        {...inputProps}
      />
      <button type="submit">
        <RiAddFill size={20} />
      </button>
    </form>
  );
}

ToDoInput.propTypes = {
  addToDo: PropTypes.func,
};

ToDoInput.defaultProps = {
  addToDo: () => {},
};

export default ToDoInput;
