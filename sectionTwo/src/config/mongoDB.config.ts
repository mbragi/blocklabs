import { DB_HOST, DB_PASSWORD, DB_USERNAME, DB_DATABASE } from './index';

export const dbConnection = {
	url: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`,
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
};
