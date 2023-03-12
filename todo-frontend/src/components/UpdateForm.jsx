import DateTimePicker from "react-datetime-picker";
const UpdateForm = ({
  updateData,
  changeTaskTitle,
  changeTaskDescription,
  updateTask,
  cancelUpdate,
  dateTime,
  setDateTime,
}) => {
  return (
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={e => changeTaskTitle(e)}
            className="form-control form-control"
          />
        </div>
        <div className="col-auto">
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
          <input
            value={updateData && updateData.description}
            onChange={e => changeTaskDescription(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={updateTask} className="btn btn-lg btn-success mr-20">
            Update
          </button>
          <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
