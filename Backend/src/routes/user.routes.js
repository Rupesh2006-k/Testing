const express = require("express");
const {
  registerUserController,
  loginUserController,
  logoutUserController,
  currentUserController,
  getAllUserController,
} = require("../controllers/user.controller");

const { authMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/logout", logoutUserController);
router.get("/current-user", authMiddleware, currentUserController);
router.get("/get-user", getAllUserController);

module.exports = router;
