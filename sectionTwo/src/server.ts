import App from './app';
import validateEnv from './utils/validateEnv';
import indexRoute from './routes/index.route';
import authRoute from './routes/authRoutes/auth.route';
import usersRoute from './routes/usersRoutes/users.routes';
import orderRoute from './routes/orders/order.route';
import productRoute from './routes/products/product.route';

function main() {
	validateEnv();
	const server = new App([indexRoute, usersRoute, authRoute, orderRoute, productRoute]);
	server.listen();
}

main();
