import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validate.middleware';
import AuthController from '@/controllers/auth/auth.controller';
import { CreateUserDto } from '@/dtos/users/CreateUser.dto';
import { LoginUserDto } from '@/dtos/auth/login.dto';


class AuthRoute implements Routes {
	public path = '/auth';
	public router = Router();
	public authController = new AuthController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
        this.router.post(`${this.path}/signUp`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
        this.router.post(`${this.path}/logIn`, validationMiddleware(LoginUserDto, 'body'), this.authController.logIn);
	}
}

export default new AuthRoute();
