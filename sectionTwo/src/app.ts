import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { connect, set, disconnect } from 'mongoose';
import { NODE_ENV, PORT, LOG_FORMAT, ORIGIN } from './config';
import { dbConnection } from './config/mongoDB.config';
import { Routes } from './interfaces/routes.interface';
import errorMiddleware from './middlewares/error.middleware';
import { logger, stream } from './utils/logger';
import authMiddleware from './middlewares/authGuard.middleware';

class App {
	private app: express.Application;
	public env: string;
	public port: string | number;
	constructor(routes: Routes[] = []) {
		this.app = express();
		this.env = NODE_ENV || 'development';
		this.port = PORT || 3000;
		this.connectToDatabase();
		this.initializeMiddlewares();
		this.initializeRoutes(routes);
		this.initializeErrorHandling();
	}

	public listen() {
		this.app.listen(this.port, () => {
			logger.info(`=================================`);
			logger.info(`======= ENV: ${this.env} ========`);
			logger.info(`🚀 App listening on the port ${this.port}`);
			logger.info(`=================================`);
		});
	}

	public getServer() {
		return this.app;
	}

	public async closeDatabaseConnection(): Promise<void> {
		try {
			await disconnect();
			logger.info('Disconnected from MongoDB');
		} catch (error) {
			logger.error('Error closing database connection:', error);
			throw new Error('Error closing database connection');
		}
	}

	private async connectToDatabase() {
		try {
			if (this.env !== 'production') {
				set('strictQuery', true);
			}
			await connect(dbConnection.url);
			logger.info(`Database connected successfully`);
		} catch (error) {
			throw new Error(`Error connecting to database: ${error.message}`);
		}
	}

	private initializeMiddlewares() {
		this.app.use(morgan(LOG_FORMAT, { stream }));
		this.app.use(cors({ origin: ORIGIN, methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'] }));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(authMiddleware);
	}

	private initializeRoutes(routes: Routes[]) {
		routes.forEach((route) => {
			this.app.use('/api/v1', route.router);
			logger.info(`Routes  /api/v1${route.path} initialized`);
		});
	}

	private initializeErrorHandling() {
		this.app.use(errorMiddleware);
	}
}

export default App;
