import { CreateProductDto, UpdateProductDto } from '@/dtos/products/index.dto';
import { HttpException } from '@/exceptions/HttpException';
import { IProducts } from '@/interfaces/products.model.interface';
import { isEmpty } from '@/utils/util';
import Products from '@/models/products.model';

class ProductService {
	public products = Products;

	public async findAllProducts(): Promise<IProducts[]> {
		const products: IProducts[] = await this.products.find();
		return products;
	}

	public async findProductById(productId: string): Promise<IProducts> {
		if (isEmpty(productId)) throw new HttpException(400, 'ProductId is empty');

		const findProduct: IProducts = await this.products.findOne({ _id: productId });
		if (!findProduct) throw new HttpException(409, "Product doesn't exist");

		return findProduct;
	}

	public async createProduct(productData: CreateProductDto): Promise<IProducts> {
		if (isEmpty(productData)) throw new HttpException(400, 'productData is empty');

		const findProduct: IProducts = await this.products.findOne({ name: productData.name });
		if (findProduct) throw new HttpException(409, `This product ${productData.name} already exists`);

		const createProductData: IProducts = await this.products.create({ ...productData });

		return createProductData;
	}

	public async updateProduct(productId: string, productData: UpdateProductDto): Promise<IProducts> {
		if (isEmpty(productData)) throw new HttpException(400, 'productData is empty');

		if (productData.name) {
			const findProduct: IProducts = await this.products.findOne({ name: productData.name });
			if (findProduct && findProduct._id != productId) throw new HttpException(409, `This product ${productData.name} already exists`);
		}

		const updateProductById: IProducts = await this.products.findByIdAndUpdate(productId, productData, { new: true });
		if (!updateProductById) throw new HttpException(409, "Product doesn't exist");

		return updateProductById;
	}

	public async deleteProduct(productId: string): Promise<IProducts> {
		const deleteProductById: IProducts = await this.products.findByIdAndDelete(productId);
		if (!deleteProductById) throw new HttpException(409, "Product doesn't exist");

		return deleteProductById;
	}
}

export default ProductService;
