import { IsNotEmpty, IsString, IsArray, IsNumber, IsPositive } from 'class-validator';

export class UpdateOrdersDto {
	@IsNotEmpty()
	@IsString()
	public userId: string;

	@IsArray()
	@IsNotEmpty()
	public products: string[]; // Assuming product IDs are stored as strings

	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	public total: number;
}
