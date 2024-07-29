import { Document } from 'mongoose';

export interface IProducts extends Document {
	name: string;
	amount: number;
	description?: string;
	category?: 'bags' | 'shoes' | 'jewelries';
	stock: number;
	discountPercent: number;
	isFeatured: boolean;
	isBestSelling: boolean;
	isTopSelling: boolean;
	imageUrl: string;
	createdAt?: Date;
	updatedAt?: Date;
}
export default IProducts;
