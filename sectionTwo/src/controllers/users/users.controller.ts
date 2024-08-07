import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos/users/CreateUser.dto';
import User from '@/interfaces/user.interface';
import userService from '@/services/users/users.service';
import { RequestWithUser } from '@/interfaces/auth.interface';

class UsersController {
	public userService = new userService();

	public getUsers = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const findAllUsersData: User[] = await this.userService.findAllUser();

			res.status(200).json({ data: findAllUsersData, message: 'findAll' });
		} catch (error) {
			next(error);
		}
	};

	public getUserById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userId: string = req.params.id;
			const findOneUserData: User = await this.userService.findUserById(userId);

			res.status(200).json({ data: findOneUserData, message: 'findOne' });
		} catch (error) {
			next(error);
		}
	};

	public createUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userData: CreateUserDto = req.body;
			const createUserData: User = await this.userService.createUser(userData);

			res.status(201).json({ data: createUserData, message: 'created' });
		} catch (error) {
			next(error);
		}
	};

	public updateUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userId: string = req.params.id;
			const userData: CreateUserDto = req.body;
			const updateUserData: User = await this.userService.updateUser(userId, userData);

			res.status(200).json({ data: updateUserData, message: 'updated' });
		} catch (error) {
			next(error);
		}
	};

	public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userId: string = req.params.id;
			const deleteUserData: User = await this.userService.deleteUser(userId);

			res.status(200).json({ data: deleteUserData, message: 'deleted' });
		} catch (error) {
			next(error);
		}
	};

	public UpdateAuthenticatedUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			const data = await this.userService.UpdateAuthenticatedUser(req.user._id, req.body);
		} catch (error) {
			next(error);
		}
	};

	public GetAuthenticatedUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			const user = req.user;
			res.status(200).json({ data: user, message: 'user' });
		} catch (error) {
			next(error);
		}
	};
}

export default UsersController;
