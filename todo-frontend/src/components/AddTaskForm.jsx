import DateTimePicker from "react-datetime-picker";
const AddTaskForm = ({
  newTaskTitle,
  setNewTaskTitle,
  newTaskDescription,
  setNewTaskDescription,
  dateTime,
  setDateTime,
  addTask,
}) => {
  return (
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          {/* title */}
          <input
            value={newTaskTitle}
            onChange={e => setNewTaskTitle(e.target.value)}
            placeholder="Input title of your todo"
            className="form-control"
          />
        </div>
        <div className="col-auto">
          {/* set date time */}
          Set Due Day :
          <DateTimePicker
            onChange={date => setDateTime(date)}
            value={dateTime}
            placeholderText="Click to select due day"
            format="h:mm:a MM/dd"
            name="dueDate"
            locale="en"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          {/* description */}
          <input
            value={newTaskDescription}
            onChange={e => setNewTaskDescription(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Input description of your todo"
            rows="10"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn  btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
