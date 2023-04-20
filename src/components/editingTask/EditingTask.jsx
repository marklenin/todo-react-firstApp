import React, { useState } from "react";
import "./EditingTask.css";

function EditingTask(props) {
  const [item, setItem] = useState(props.editTodo);
  console.log(item);

  const handleEditInput = (e) => {
    let newObj = { ...item };
    newObj.task = e.target.value;
    setItem(newObj);
  };
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={() => props.handleCloseEdit()}>&times;</button>
        </div>
        <input
          type="text"
          className="inp-edit"
          value={item.task}
          onChange={handleEditInput}
        />
        <button onClick={() => props.handleSaveTask(item)}>save changes</button>
      </div>
    </div>
  );
}

export default EditingTask;
