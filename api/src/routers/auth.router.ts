import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router: Router = Router();

const authController = new AuthController();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);

export default router;