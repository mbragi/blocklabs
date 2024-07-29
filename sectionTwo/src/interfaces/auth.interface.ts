import { Request } from 'express';
import IUser from './user.model.interface';

export interface DataStoredInToken {
	id: string;
}

export interface TokenData {
	token: string;
	expiresIn?: number;
}

export interface RequestWithUser extends Request {
	user: IUser;
}
