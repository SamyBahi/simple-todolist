import React, { useEffect } from "react";
import { useState } from "react";
import Todo from "./components/Todos/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import Completed from "./components/Todos/Completed";
import styles from "./App.module.css";
import useHttp from "./hooks/use-http";
import Spinner from "./components/UI/Spinner";
import { isElementType } from "@testing-library/user-event/dist/utils";

const App = (props) => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const { isLoading, httpError, sendRequest } = useHttp();

  useEffect(() => {
    const sortTasks = (data) => {
      const loadedTodos = [];
      const loadedChecked = [];

      for (const key in data) {
        if (data[key]["checked"]) {
          loadedChecked.push({ id: key, ...data[key] });
        } else {
          loadedTodos.push({ id: key, ...data[key] });
        }
      }
      setTodos(
        loadedTodos.sort(function (a, b) {
          return new Date(b.lastModified) - new Date(a.lastModified);
        })
      );
      setCompleted(
        loadedChecked.sort(function (a, b) {
          return new Date(b.lastModified) - new Date(a.lastModified);
        })
      );
    };

    sendRequest(
      {
        url: "https://todos-af4a4-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      },
      sortTasks
    );
  }, [sendRequest]);

  const addTodoHandler = (todoItem) => {
    setTodos((prevTodos) => {
      return [todoItem, ...prevTodos];
    });
  };

  const completeTodoHandler = (completedItem) => {
    setCompleted((prevCompleted) => {
      return [completedItem, ...prevCompleted];
    });

    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        if (todo.id === completedItem.id) {
          return false;
        } else {
          return true;
        }
      });
    });
  };

  const uncompleteTodoHandler = (uncompletedItem) => {
    setTodos((prevTodos) => {
      return [uncompletedItem, ...prevTodos];
    });

    setCompleted((prevCompleted) => {
      return prevCompleted.filter((completed) => {
        if (completed.id === uncompletedItem.id) {
          return false;
        } else {
          return true;
        }
      });
    });
  };

  const deleteTodoHandler = (completedItemId) => {
    setCompleted((prevCompleted) => {
      return prevCompleted.filter((todo) => {
        if (todo.id === completedItemId) {
          return false;
        } else {
          return true;
        }
      });
    });
  };

  const loadedContent = (
    <>
      <Todo items={todos} onCheckTodo={completeTodoHandler} />
      <Completed
        items={completed}
        onDeleteCompleted={deleteTodoHandler}
        onCheckTodo={uncompleteTodoHandler}
      />
    </>
  );

  const isLoadingContent = (
    <div className={styles["loading-container"]}>
      <Spinner />
    </div>
  );

  const httpErrorContent = <p>{httpError}</p>;
  return (
    <div className={styles["container"]}>
      <main className={styles["app"]}>
        <h1 id={styles["page-title"]}>Todos.</h1>
        <AddTodo onAddTodo={addTodoHandler} />
        {!isLoading && !httpError && loadedContent}
        {isLoading && isLoadingContent}
        {!isLoading && httpError && httpErrorContent}
      </main>
    </div>
  );
};

export default App;
