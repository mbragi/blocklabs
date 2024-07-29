import IUser from '@/interfaces/user.interface';
import { Schema, model } from 'mongoose';

const UserSchema = new Schema<IUser>(
	{
		username: {
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
		refreshToken: {
			type: String,
		},
	},
	{ timestamps: true },
);

const User = model<IUser>('users', UserSchema);

export default User;
