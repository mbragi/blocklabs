import { Document } from 'mongoose';

interface IUser extends Document {
	username?: string;
	email?: string;
	refreshToken?: string;
	hashedPassword?: string;
}

export default IUser;

export declare type Login = {
	email: string;
	password: string;
};
