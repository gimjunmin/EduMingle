const express = require("express");
const { createTask } = require("../../controller/task.controller");
const router = express.Router();

router.get("/");
router.post("/, creatTask");
router.put("/:id");
router.delete("/:id");

module.exports = router;
