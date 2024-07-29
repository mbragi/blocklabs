import { Schema, model } from 'mongoose';
import IOrders from '@/interfaces/orders.model.interface';

const OrdersSchema = new Schema<IOrders>(
	{
		userId: {
			type: String,
			required: true,
		},
		products: {
			type: [Schema.Types.ObjectId],
			ref: 'Products',
		},
		total: {
			type: Number,
		},
		isDelivered: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

const Orders = model<IOrders>('Orders', OrdersSchema);

export default Orders;
