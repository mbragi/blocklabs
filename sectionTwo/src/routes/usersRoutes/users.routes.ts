import { Router } from 'express';
import UsersController from '@/controllers/users/users.controller';
import { Routes } from '@/interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validate.middleware';
import { UpdateUserDto } from '@/dtos/users/UpdateUser.dto';

class UsersRoute implements Routes {
	public path = '/users';
	public router = Router();
	public usersController = new UsersController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(`${this.path}/create`, this.usersController.createUser);
		this.router.get(`${this.path}/get-all-users`, this.usersController.getUsers);
		this.router.get(`${this.path}/user/:id`, this.usersController.getUserById);
		this.router.put(`${this.path}/:id`, this.usersController.updateUser);
		this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
		this.router.get(`${this.path}/me`, this.usersController.GetAuthenticatedUser);
		this.router.put(`${this.path}/me/profile`, validationMiddleware(UpdateUserDto, 'body'), this.usersController.UpdateAuthenticatedUser);
	}
}

export default new UsersRoute();
