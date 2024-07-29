import { Document } from 'mongoose';

interface IUser extends Document {
	role?: string;
	fullName?: string;
	email?: string;
	resetToken?: string;
	refreshToken?: string;
	hashedPassword?: string;
	address: string;
	region: string;
	city: string;
	phoneNumber: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export default IUser;

export declare type Login = {
	email: string;
	password: string;
};
