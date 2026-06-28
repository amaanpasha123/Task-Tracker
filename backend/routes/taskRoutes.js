const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { createTask } = require("../controllers/taskControllers");

router.post("/", authMiddleware, createTask);

module.exports = router;

