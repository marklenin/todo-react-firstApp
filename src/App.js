import React, { useState } from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/toDoList/ToDoList";
import EditingTask from "./components/editingTask/EditingTask";

const App = () => {
  // sozdaem sostoyanie, v kotorom budut hranitca vse taski, i iz kotorogo potom budem delat' otobrazheniye
  const [todos, setTodos] = useState([]);

  // created a state, that will contain an editing task
  const [editTodo, setEditTodo] = useState({});
  console.log(editTodo);

  // state for showing or closing EditingTask.jsx
  const [modal, setModal] = useState(false);

  // funciya dlya obnavleniya massiva s taskami (todos)
  const handleTask = (newObj) => {
    //kopiruem vse chto uzhe bylo v sostoyanii todos (vse taski)
    let newTodos = [...todos];
    //dobavili novyi task v massiv newToDos
    newTodos.push(newObj);
    // obnovili sostoyanie
    setTodos(newTodos);
  };

  const changeStatus = (id) => {
    //perebiraem todos pri pomoshi metoda massiva map, esli id u kakogo-to ob'ecta iz massiva todos, sovpadaet s tem id, kotoryi prihodit v funciy pri vyzove, to status men'yaetcya na protivopolozhniy
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(newTodos);
  };

  //Task deleting function, that resives an id of element we want to delete
  const handleDelete = (id) => {
    //filter todos, with returing elements that do no match with an id;
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  // that function will work on click to button edit
  const handleEdit = (taskToEdit) => {
    // display modal window
    setModal(true);
    // to editTodo state, put editing object that we will resive on handleEdit function run
    setEditTodo(taskToEdit);
  };

  const handleCloseEdit = () => {
    setModal(false);
  };

  // function for saving edited task
  const handleSaveTask = (updatedTask) => {
    // loop trough todos, and if item id matchs with updatedTask id, map will return updatedTask, in other cases we will return item without changes.
    const newTodos = todos.map((item) => {
      if (item.id === updatedTask.id) {
        return updatedTask;
      }
      return item;
    });
    setTodos(newTodos);
    // close modal window
    handleCloseEdit();
  };

  return (
    <div>
      <AddToDo handleTask={handleTask} />
      <ToDoList
        todos={todos}
        handleDelete={handleDelete}
        changeStatus={changeStatus}
        handleEdit={handleEdit}
      />
      {modal ? (
        <EditingTask
          editTodo={editTodo}
          handleCloseEdit={handleCloseEdit}
          handleSaveTask={handleSaveTask}
        />
      ) : null}
    </div>
  );
};

export default App;
