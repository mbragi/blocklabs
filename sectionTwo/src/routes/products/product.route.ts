import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import ProductsController from '@/controllers/product/product.controller';
import validationMiddleware from '@/middlewares/validate.middleware';
import { CreateProductDto } from '@/dtos/products/CreateProduct.dto';
import { UpdateProductDto } from '@/dtos/products/UpdateProduct.dto';

class ProductRoute implements Routes {
	public path = '/product';
	public router = Router();
	public indexController = new ProductsController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}/all`, this.indexController.getProducts);
		this.router.get(`${this.path}/single/:id`, this.indexController.getProductById);
		this.router.post(`${this.path}/create`, validationMiddleware(CreateProductDto, 'body'), this.indexController.createProduct);
		this.router.patch(`${this.path}/update/:id`, validationMiddleware(UpdateProductDto, 'body', true), this.indexController.updateProduct);
		this.router.delete(`${this.path}/delete/:id`, this.indexController.deleteProduct);
	}
}

export default new ProductRoute();
