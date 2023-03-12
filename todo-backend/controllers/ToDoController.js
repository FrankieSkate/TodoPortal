const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
  const todo = await TodoModel.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { title, description, time } = req.body;

  TodoModel.create({ title, description, time })
    .then(data => {
      console.log("Added Successfully ...");
      res.send(data);
    })
    .catch(err => console.log(err));
};

module.exports.updateTodo = (req, res) => {
  const { _id, title, description, time } = req.body;

  TodoModel.findByIdAndUpdate(_id, { title, description, time })
    .then(() => res.send("Updated Successfully ..."))
    .catch(err => console.log(err));
};

module.exports.deleteTodo = (req, res) => {
  const { _id } = req.body;

  TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully ..."))
    .catch(err => console.log(err));
};

module.exports.markDoneTodo = (req, res) => {
  const { _id, status } = req.body;
  TodoModel.findByIdAndUpdate(_id, { status })
    .then(() => res.send("MarkDone Successfully ..."))
    .catch(err => console.log(err));
};
