import { NextFunction, Request, Response } from 'express';
import { CreateOrdersDto, UpdateOrdersDto } from '@/dtos/orders';
import { IOrders } from '@/interfaces/orders.model.interface';
import orderService from '@/services/orders/orders.service';
import { RequestWithUser } from '@/interfaces/auth.interface';

class OrdersController {
	public orderService = new orderService();

	public getOrders = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const findAllOrdersData: IOrders[] = await this.orderService.findAllOrders();
			res.status(200).json({ data: findAllOrdersData, message: 'findAll' });
		} catch (error) {
			next(error);
		}
	};

	public getOrderById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const orderId: string = req.params.id;
			const findOrderByIdData: IOrders = await this.orderService.findOrderById(orderId);
			if (!findOrderByIdData) {
				return res.status(404).json({ message: 'Order not found' });
			}
			res.status(200).json({ data: findOrderByIdData, message: 'findOne' });
		} catch (error) {
			next(error);
		}
	};

	public createOrder = async (req: RequestWithUser, res: Response, next: NextFunction) => {
		try {
			const orderData: CreateOrdersDto = req.body;
			const createOrderData: IOrders = await this.orderService.createOrder(req.user, orderData);
			res.status(201).json({ data: createOrderData, message: 'created' });
		} catch (error) {
			next(error);
		}
	};

	public updateOrder = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const orderId: string = req.params.id;
			const orderData: UpdateOrdersDto = req.body;
			const updateOrderData: IOrders = await this.orderService.updateOrder(orderId, orderData);
			if (!updateOrderData) {
				return res.status(404).json({ message: 'Order not found' });
			}
			res.status(200).json({ data: updateOrderData, message: 'updated' });
		} catch (error) {
			next(error);
		}
	};

	public deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const orderId: string = req.params.id;
			const deleteOrderData: IOrders = await this.orderService.deleteOrder(orderId);
			if (!deleteOrderData) {
				return res.status(404).json({ message: 'Order not found' });
			}
			res.status(200).json({ data: deleteOrderData, message: 'deleted' });
		} catch (error) {
			next(error);
		}
	};
}

export default OrdersController;
