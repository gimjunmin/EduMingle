// 주소값 설정하기
// post /task
// get /task
// put  /task/:id
// delete /task/:id

const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");

router.use("/task", taskApi);
router.use("/product", productApi);

module.exports = router;
