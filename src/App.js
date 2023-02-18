import React from "react";
import { useState } from "react";
import Todo from "./components/Todos/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import Completed from "./components/Todos/Completed";

const staticTodos = [
  {
    id: "todo1",
    title: "Faire la vaisselle",
    checked: false,
  },
  {
    id: "todo2",
    title: "Vendre mon micro",
    checked: false,
  },
  {
    id: "todo3",
    title: "Acheter un rasoir",
    checked: false,
  },
];

const App = (props) => {
  const [todos, setTodos] = useState(staticTodos);
  const [completed, setCompleted] = useState([]);

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

  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <br></br>
      <Todo items={todos} onCheckTodo={completeTodoHandler} />
      <Completed items={completed} onDeleteCompleted={deleteTodoHandler} />
    </div>
  );
};

export default App;
