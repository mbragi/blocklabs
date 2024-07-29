/* eslint-disable prettier/prettier */
// generate a random secret key
import crypto from 'crypto';
const generateSecret = () => {
	const secret = crypto.randomBytes(64).toString('hex');
	console.log(secret);
};
generateSecret();
