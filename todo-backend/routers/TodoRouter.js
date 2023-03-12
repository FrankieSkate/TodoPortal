const { Router } = require("express");

const {
  getTodo,
  updateTodo,
  deleteTodo,
  saveTodo,
  markDoneTodo,
} = require("../controllers/ToDoController");
const router = Router();

router.get("/", getTodo);
router.post("/add", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);
router.post("/markDone", markDoneTodo);

module.exports = router;
