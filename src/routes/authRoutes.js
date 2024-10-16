import { Router } from "express";
import { authenticate, isAdmin } from "../middleware/authenticate.js";

import { login, profile, register } from "../controllers/authController.js";
const routes = Router();

// register
routes.post("/register", register);

// login
routes.post("/login", login);

// view user profile
routes.get("/profile", authenticate, isAdmin, profile);

export default routes;
