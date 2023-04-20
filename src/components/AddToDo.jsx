import React, { useState } from "react";

const AddToDo = (props) => {
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };
  const handleAdd = () => {
    if (!task) {
      alert("input is empty");
      return;
    }
    const newTask = {
      task: task,
      status: false,
      id: Date.now(),
    };
    props.handleTask(newTask);
  };

  return (
    <div>
      <h2>ADD TODO components</h2>
      <input type="text" onChange={handleInput} />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default AddToDo;
