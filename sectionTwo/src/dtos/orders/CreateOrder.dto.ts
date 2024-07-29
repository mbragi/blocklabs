import { IsNotEmpty, IsString, IsArray, IsNumber, IsPositive } from 'class-validator';

export class CreateOrdersDto {
	@IsArray()
	@IsNotEmpty()
	public products: string[];

	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	public total: number;
}
