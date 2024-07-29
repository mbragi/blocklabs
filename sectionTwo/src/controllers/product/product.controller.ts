import { NextFunction, Request, Response } from 'express';
import { CreateProductDto, UpdateProductDto } from '@/dtos/products/index.dto';
import { IProducts } from '@/interfaces/products.model.interface';
import ProductService from '@/services/products/products.service';
import { HttpException } from '@/exceptions/HttpException';

class ProductsController {
	public ProductService = new ProductService();

	public getProducts = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const findAllProductsData: IProducts[] = await this.ProductService.findAllProducts();

			res.status(200).json({ data: findAllProductsData, message: 'findAll' });
		} catch (error) {
			next(error);
		}
	};

	public getProductById = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const productId: string = req.params.id;
			const findOneProductData: IProducts = await this.ProductService.findProductById(productId);
			if (!findOneProductData) throw new HttpException(404, 'product not found');
			res.status(200).json({ data: findOneProductData, message: 'findOne' });
		} catch (error) {
			next(error);
		}
	};

	public createProduct = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const productData: CreateProductDto = req.body;
			const createProductData: IProducts = await this.ProductService.createProduct(productData);

			res.status(201).json({ data: createProductData, message: 'created' });
		} catch (error) {
			next(error);
		}
	};

	public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const productId: string = req.params.id;
			const productData: UpdateProductDto = req.body;
			const updateProductData: IProducts = await this.ProductService.updateProduct(productId, productData);

			res.status(200).json({ data: updateProductData, message: 'updated' });
		} catch (error) {
			next(error);
		}
	};

	public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const productId: string = req.params.id;
			const deleteProductData: IProducts = await this.ProductService.deleteProduct(productId);

			res.status(200).json({ data: deleteProductData, message: 'deleted' });
		} catch (error) {
			next(error);
		}
	};
}

export default ProductsController;
