import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '.';

export const generateToken = (payload: any, shouldExpire: boolean) => {
	if (shouldExpire) {
		return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });
	} else {
		return jwt.sign(payload, SECRET_KEY);
	}
};

export const verifyToken = (payload: string) => {
	try {
		return jwt.verify(payload, SECRET_KEY);
	} catch (error) {
		throw new Error('Invalid token');
	}
};
export const decodeToken = (payload: string) => {
	try {
		return jwt.decode(payload);
	} catch (error) {
		throw new Error('Failed to decode token');
	}
};
