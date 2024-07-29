import { IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional, IsBoolean } from 'class-validator';

export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	public name: string;

	@IsString()
	@IsOptional()
	public description?: string;

	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	public amount: number;

	@IsString()
	@IsNotEmpty()
	public category?: string;

	@IsNotEmpty()
	@IsString()
	public imageUrl: string;

	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	public stock?: number;

	@IsOptional()
	@IsBoolean()
	isFeatured: boolean;

	@IsOptional()
	@IsBoolean()
	isTopSelling: boolean;

	@IsOptional()
	@IsBoolean()
	isBestSelling: boolean;
}
