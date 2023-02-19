import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (!title) return;

    const todoData = {
      id: Math.random().toString(),
      title: title,
    };

    props.onAddTodo(todoData);
    setTitle("");
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className={styles["add-todo__card"]}>
      <form>
        <div className={styles["add-todo__form"]}>
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
          <div>
            <input
              type="text"
              value={title}
              onChange={titleChangeHandler}
              className={styles["add-todo__text"]}
              placeholder="Add task"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
