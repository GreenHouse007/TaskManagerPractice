const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  createTasks,
  updateTask,
  deleteTasks,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTasks);
router.route(`/:id`).get(getTask).patch(updateTask).delete(deleteTasks);

module.exports = router;
