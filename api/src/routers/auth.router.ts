import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

const router: Router = Router();
const userService = new UserService();

const authController = new AuthController(new AuthService(userService));

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);

export default router;