import PropTypes from "prop-types";
import React, { useState } from "react";

function ToDoUtils(props) {
  const { setFilter, clearCompleted } = props;
  const [tab, setTab] = useState(1);

  const clickFilterAll = () => {
    setFilter([true, false]);
    setTab(1);
  };

  const clickFilterActive = () => {
    setFilter([false]);
    setTab(2);
  };

  const clickFilterCompleted = () => {
    setFilter([true]);
    setTab(3);
  };

  return (
    <div className="flex flex-row text-[12px] gap-x-3 text-center items-center my-5">
      <div className="flex flex-row gap-x-3 tabs tabs-boxed bg-transparent">
        <button
          type="button"
          className={`tab ${tab === 1 && "tab-active"}`}
          onClick={clickFilterAll}
        >
          All
        </button>
        <button
          type="button"
          className={`tab ${tab === 2 && "tab-active"}`}
          onClick={clickFilterActive}
        >
          Active
        </button>
        <button
          type="button"
          className={`tab ${tab === 3 && "tab-active"}`}
          onClick={clickFilterCompleted}
        >
          Completed
        </button>
      </div>
      <button type="button" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

ToDoUtils.propTypes = {
  setFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

export default ToDoUtils;
