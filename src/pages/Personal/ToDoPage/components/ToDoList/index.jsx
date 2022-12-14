import PropTypes from "prop-types";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

function ToDoList(props) {
  const { toDoList, toggleCompletion, deleteToDo } = props;

  return (
    toDoList &&
    (toDoList.length === 0 ? (
      <div className="flex items-center justify-around h-[150px] bg-white dark:bg-slate-600 border-b border-gray-700 w-full text-[18px]">
        No Todo item left !
      </div>
    ) : (
      toDoList.map((todo) => (
        <div
          className="flex items-center justify-around h-[60px] w-full text-[18px] text-dark-mode-body dark:text-light-mode-body bg-white dark:bg-slate-600 border-b border-gray-700"
          key={todo.id}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            className="checkbox checkbox-accent"
            onChange={() => {
              toggleCompletion(todo.id, !todo.completed);
            }}
          />
          <div
            className={`w-[500px] ${
              todo.completed && "line-through opacity-40"
            }`}
          >
            {todo.text}
          </div>
          <button
            type="button"
            onClick={() => {
              if (todo.completed) {
                deleteToDo(todo.id);
              }
            }}
          >
            <TiDeleteOutline size={20} />
          </button>
        </div>
      ))
    ))
  );
}

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf({
    text: PropTypes.string,
    completed: PropTypes.bool,
    uid: PropTypes.string,
    id: PropTypes.string,
  }),
  toggleCompletion: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

ToDoList.defaultProps = {
  toDoList: [],
};

export default ToDoList;
