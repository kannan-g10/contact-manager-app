const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controller/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
