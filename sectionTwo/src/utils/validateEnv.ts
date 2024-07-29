import { config } from 'dotenv';
import { cleanEnv, port, str } from 'envalid';
config();

const validateEnv = () => {
	cleanEnv(process.env, {
		NODE_ENV: str(),
		PORT: port(),
	});
};

export default validateEnv;
