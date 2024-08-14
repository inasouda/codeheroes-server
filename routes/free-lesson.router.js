const express = require("express");
const {requestFreeLesson} = require("../controllers/free-lesson.controller");



const router = express.Router();

router.post("/", requestFreeLesson)


module.exports = router;