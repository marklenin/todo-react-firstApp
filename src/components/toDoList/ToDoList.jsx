import React from "react";
import "./TodoList.css";

function ToDoList(props) {
  console.log(props);

  let style = {
    color: "red",
    listStyleType: "none",
  };
  return (
    <div>
      <h2>Todo List Component</h2>
      {/* perebiraem massiv todos, kotoryi poluchili cherez propsy, gde na kazhdyi element v massive todos vozavrashaem li */}
      <ul style={style}>
        {props.todos.map((item) => (
          <li key={item.id} className={item.status ? "completed" : ""}>
            <input
              type="checkbox"
              onChange={() => props.changeStatus(item.id)}
            />
            {item.task}
            <button onClick={() => props.handleEdit(item)}>edit task</button>
            <button onClick={() => props.handleDelete(item.id)}>
              delete task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
