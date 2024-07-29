import { HttpException } from '@/exceptions/HttpException';
import { IOrders } from '@/interfaces/orders.model.interface';
import { isEmpty } from '@/utils/util';
import Orders from '@/models/orders.model';
import { CreateOrdersDto } from '@/dtos/orders';
import IUser from '@/interfaces/user.model.interface';

class OrderService {
	public orders = Orders;

	public async findAllOrders(): Promise<IOrders[]> {
		const orders: IOrders[] = await this.orders.find().populate('products');
		return orders;
	}

	public async findOrderById(orderId: string): Promise<IOrders> {
		if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');

		const findOrder: IOrders = await this.orders.findOne({ _id: orderId }).populate('products');
		if (!findOrder) throw new HttpException(409, "Order doesn't exist");

		return findOrder;
	}

	public async createOrder(user: IUser, orderData: CreateOrdersDto): Promise<IOrders> {
		console.log('orderData', orderData)
		if (isEmpty(orderData)) throw new HttpException(400, 'orderData is empty');
		const data = { ...orderData, userId: user._id };
		const createOrdersData: IOrders = await this.orders.create(data);
		return createOrdersData;
	}

	public async updateOrder(orderId: string, orderData: CreateOrdersDto): Promise<IOrders> {
		if (isEmpty(orderData)) throw new HttpException(400, 'orderData is empty');

		const updateOrderById: IOrders = await this.orders.findByIdAndUpdate(orderId, orderData, { new: true });
		if (!updateOrderById) throw new HttpException(409, "Order doesn't exist");

		return updateOrderById;
	}

	public async deleteOrder(orderId: string): Promise<IOrders> {
		const deleteOrderById: IOrders = await this.orders.findByIdAndDelete(orderId);
		if (!deleteOrderById) throw new HttpException(409, "Order doesn't exist");

		return deleteOrderById;
	}
}

export default OrderService;
