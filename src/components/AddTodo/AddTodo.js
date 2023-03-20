import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useHttp from "../../hooks/use-http";
import Spinner from "../UI/Spinner";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const { isLoading, httpError, sendRequest } = useHttp();

  const createTask = (taskTitle, data) => {
    const todoData = {
      id: data.name,
      title: taskTitle,
    };
    props.onAddTodo(todoData);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (!title) return;

    const taskTitle = title;
    setTitle("");
    sendRequest(
      {
        url: "https://todos-af4a4-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          checked: false,
          title: taskTitle,
        },
      },
      createTask.bind(null, taskTitle)
    );
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className={styles["add-todo__card"]}>
      <form className={styles["add-todo__form"]}>
        <div className={styles["button-container"]}>
          <button
            onClick={addTodoHandler}
            disabled={!title}
            className={styles["add-todo__button"]}
            aria-label="add"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={styles["add-todo__text__container"]}>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
            className={styles["add-todo__text"]}
            placeholder={httpError ? { httpError } : "Add task"}
          ></input>
          {isLoading && (
            <div className={styles["loading-container"]}>
              <Spinner />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
