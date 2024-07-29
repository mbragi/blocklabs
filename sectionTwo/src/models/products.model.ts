import IProducts from '@/interfaces/products.model.interface';
import { Schema, model } from 'mongoose';

const ProductsSchema = new Schema<IProducts>(
	{
		name: {
			type: String,
		},
		amount: {
			type: Number,
		},
		description: {
			type: String,
		},
		imageUrl: {
			type: String,
		},
		category: {
			type: String,
			enum: ['bags', 'shoes', 'jewelries'],
		},
		stock: {
			type: Number,
		},
		discountPercent: {
			type: Number,
			default: 0,
		},
		isFeatured: {
			type: Boolean,
			default: false,
		},
		isBestSelling: {
			type: Boolean,
			default: false,
		},
		isTopSelling: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

const Products = model<IProducts>('Products', ProductsSchema);

export default Products;
