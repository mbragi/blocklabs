import mongoose, { Document } from 'mongoose';

export interface IOrders extends Document {
	userId: string;
	products: mongoose.Types.ObjectId[];
	total: number;
	isDelivered: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export default IOrders;
