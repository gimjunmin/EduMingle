const express = require("express");
const { createTask } = require("../controllers/task.controller");
const router = express.Router();

router.get("/");
router.post("/, creatTask");
router.put("/:id");
router.delete("/:id");

module.exports = router;
