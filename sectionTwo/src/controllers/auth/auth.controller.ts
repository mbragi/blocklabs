import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos/users/CreateUser.dto';
// import RequestWithUser from '@/interfaces/user.model.interface';
import User from '@/interfaces/user.interface';
import AuthService from '@/services/auth/auth.service';
import { LoginUserDto } from '@/dtos/auth/login.dto';

class AuthController {
	public authService = new AuthService();

	public signUp = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userData: CreateUserDto = req.body;
			const signUpUserData: User = await this.authService.signup(userData);

			res.status(201).json({ data: signUpUserData, message: 'Sign Up successfully' });
		} catch (error) {
			next(error);
		}
	};

	public logIn = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userData: LoginUserDto = req.body;
			const { token, user } = await this.authService.login(userData);
			console.log(user);
			res.status(200).json({ data: { token, user }, message: 'Log In successfully' });
		} catch (error) {
			next(error);
		}
	};

	public logOut = async (req: Request, res: Response, next: NextFunction) => {
		try {
			// implement logic to invalidate the access token
		} catch (error) {
			next(error);
		}
	};

}

export default AuthController;
