import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import axios from "axios";
function App() {
  const baseUrl = "http://localhost:5006";

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // get all the todos from the database
  const getAllToDo = setToDo => {
    axios.get(baseUrl).then(data => {
      setToDo(data.data);
    });
  };

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  // Temp State
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [updateData, setUpdateData] = useState("");

  // Add task
  const addTask = () => {
    if (newTaskTitle) {
      axios
        .post(baseUrl + "/add", {
          title: newTaskTitle,
          description: newTaskDescription,
          time: dateTime,
          status: false,
        })
        .then(() => {
          console.log(newTaskTitle);
          getAllToDo(setToDo);
          setDateTime();
          setNewTaskTitle("");
          setNewTaskDescription("");
        });
    }
  };
  // Change task for update
  const changeTaskTitle = (e, d) => {
    let newEntry = {
      _id: updateData._id,
      title: e.target.value,
      description: updateData.description,
      time: updateData.time,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const changeTaskDescription = e => {
    let newEntry = {
      _id: updateData._id,
      title: updateData.title,
      description: e.target.value,
      time: updateData.time,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update task
  ///////////////////////////
  const updateTask = () => {
    axios
      .post(baseUrl + "/update", {
        _id: updateData._id,
        title: updateData.title,
        description: updateData.description,
        time: updateData.time,
        status: updateData.status,
      })
      .then(() => {
        getAllToDo(setToDo);
        setUpdateData("");
        setDateTime("");
        setNewTaskDescription("");
      });
  };

  // Delete task
  const deleteTask = _id => {
    axios.post(baseUrl + "/delete", { _id });
    getAllToDo(setToDo);
  };

  // Mark task as done or completed

  const markDone = (_id, status) => {
    axios
      .post(baseUrl + "/markDone", {
        _id: _id,
        status: status,
      })
      .then(() => {
        getAllToDo(setToDo);
      });
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <br />
      <h1>To Do List App by Frankie</h1>
      <br />
      <br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTaskTitle={changeTaskTitle}
          changeTaskDescription={changeTaskDescription}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          dateTime={dateTime}
          setDateTime={setDateTime}
        />
      ) : (
        <AddTaskForm
          newTaskTitle={newTaskTitle}
          setNewTaskTitle={setNewTaskTitle}
          newTaskDescription={newTaskDescription}
          setNewTaskDescription={setNewTaskDescription}
          dateTime={dateTime}
          setDateTime={setDateTime}
          addTask={addTask}
        />
      )}

      {toDo && toDo.length ? "" : "No Tasks..."}
      {toDo &&
        toDo.map((task, index) => (
          <ToDo
            key={task._id}
            task={task}
            index={index}
            markDone={markDone}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
}

export default App;
