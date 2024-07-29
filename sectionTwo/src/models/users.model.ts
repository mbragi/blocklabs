import IUser from '@/interfaces/user.model.interface';
import { Schema, model } from 'mongoose';

const UserSchema = new Schema<IUser>(
	{
		fullName: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		hashedPassword: {
			type: String,
			unique: true,
		},
		role: {
			type: String,
			enum: ['customer', 'admin'],
			default: 'customer',
		},
		address: {
			type: String,
		},
		region: {
			type: String,
		},
		city: {
			type: String,
		},
		phoneNumber: {
			type: String,
		},
		resetToken: {
			type: String,
		},
		refreshToken: {
			type: String,
		},
	},
	{ timestamps: true },
);

const User = model<IUser>('users', UserSchema);

export default User;
