import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ task, index, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      <div className="col taskBg">
        <div className={task.status ? "done" : ""}>
          <span className="taskNumber">{index + 1}</span>
          <span className="taskText"> Title : {task.title}</span>
          <span className="taskText"> Description : {task.description}</span>
          <span className="taskText"> Due day: {task.time}</span>
        </div>
        <div className="iconsWrap">
          <span
            title="Completed / Not Completed"
            onClick={e => markDone(task._id, !task.status)}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>

          {task.status ? null : (
            <span
              title="Edit"
              onClick={() =>
                setUpdateData({
                  _id: task._id,
                  title: task.title,
                  description: task.description,
                  status: task.status ? true : false,
                })
              }
            >
              <FontAwesomeIcon icon={faPen} />
            </span>
          )}

          <span title="Delete" onClick={() => deleteTask(task._id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </>
  );
};

export default ToDo;
