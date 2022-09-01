import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { AppLayout } from "layouts";
import { firestore, firebase, auth } from "services/firebase";

import { ToDoInput, ToDoList, ToDoUtils } from "./components";

function ToDoPage() {
  const todosRef = firestore.collection("todos");
  const [filter, setFilter] = useState([true, false]);
  const [dummy, setDummy] = useState([]);
  const [todos] = useCollectionData(
    todosRef
      .where("uid", "==", auth.currentUser?.uid || "")
      .where("completed", "in", filter),
    { idField: "id" }
  );

  const addTodo = async (text) => {
    const { uid } = auth.currentUser;
    await todosRef.add({
      text,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      completed: false,
    });
  };

  const AsyncSetFilter = (value) => {
    setDummy(todos);
    setFilter(value);
  };

  const toggleCompletion = async (id, state) => {
    await todosRef.doc(id).update({
      completed: state,
    });
  };

  const deleteToDo = async (id) => {
    await todosRef.doc(id).delete();
  };

  const clearCompleted = async () => {
    todos.forEach(async (todo) => {
      if (todo.completed) {
        await deleteToDo(todo.id);
      }
    });
  };

  return (
    <AppLayout pageName="Dart">
      <div className="flex w-full justify-center max-h-[90%] my-[100px]">
        <div className="flex flex-col items-center w-[40%]">
          <div className="flex items-start w-full text-[2.2rem]">TO DO</div>
          <ToDoInput addToDo={addTodo} />
          <ToDoUtils
            filter={filter}
            setFilter={AsyncSetFilter}
            clearCompleted={clearCompleted}
          />
          <ToDoList
            toDoList={todos || dummy}
            toggleCompletion={toggleCompletion}
            deleteToDo={deleteToDo}
          />
        </div>
      </div>
    </AppLayout>
  );
}

export default ToDoPage;
