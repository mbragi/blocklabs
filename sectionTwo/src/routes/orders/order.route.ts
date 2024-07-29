import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import OrdersController from '@/controllers/orders/orders.controller';
import validationMiddleware from '@/middlewares/validate.middleware';
import { CreateOrdersDto } from '@/dtos/orders';

class OrderRoute implements Routes {
	public path = '/order';
	public router = Router();
	public indexController = new OrdersController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}/all`, this.indexController.getOrders);
		this.router.get(`${this.path}/single/:id`, this.indexController.getOrderById);
		this.router.post(`${this.path}/create`, validationMiddleware(CreateOrdersDto, 'body'), this.indexController.createOrder);
		this.router.patch(`${this.path}/update/:id`, this.indexController.updateOrder);
		this.router.delete(`${this.path}/delete/:id`, this.indexController.deleteOrder);
	}
}

export default new OrderRoute();
