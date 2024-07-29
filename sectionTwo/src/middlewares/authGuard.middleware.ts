import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@/config/index';
import { HttpException } from '@/exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '@/interfaces/auth.interface';
import UserModel from '@/models/users.model';
const openRoutes = ['/auth/logIn', '/auth/signUp'];

const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
	const url = req.url;
	try {
		if (openRoutes.includes(url.split('/v1')[1])) {
			next();
			return;
		}

		const Authorization = req.headers.authorization.split('Bearer ')[1];
		if (Authorization) {
			const secretKey: string = SECRET_KEY;
			const verificationResponse = verify(Authorization, secretKey) as DataStoredInToken;
			const userId = verificationResponse.id;
			const findUser = await UserModel.findById(userId,{}, {lean: true});
			if (findUser) {
				delete findUser.hashedPassword;
				delete findUser.refreshToken;
				req.user = findUser;
				next();
			} else {
				next(new HttpException(401, 'Wrong authentication token'));
			}
		} else {
			next(new HttpException(403, 'Authentication token missing'));
		}
	} catch (error) {
		console.log('error', error);
		next(new HttpException(401, 'Wrong authentication token'));
	}
};

export default authMiddleware;
