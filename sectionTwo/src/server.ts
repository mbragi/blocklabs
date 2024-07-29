import App from './app';
import validateEnv from './utils/validateEnv';
import authRoute from './routes/auth/auth.route';
import usersRoute from './routes/user/users.routes';

function main() {
	validateEnv();
	const server = new App([ usersRoute, authRoute ]);
	server.listen();
}

main();
