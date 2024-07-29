import { IsString, IsOptional, IsNumber, IsPositive, IsBoolean } from 'class-validator';

export class UpdateProductDto {
	@IsString()
	@IsOptional()
	public name: string;

	@IsString()
	@IsOptional()
	public description?: string;

	@IsNumber()
	@IsPositive()
	@IsOptional()
	public price?: number;

	@IsString()
	@IsOptional()
	public category?: string;

	@IsNumber()
	@IsPositive()
	@IsOptional()
	public stock?: number;

	@IsOptional()
	@IsString()
	public imageUrl: string;

	@IsNumber()
	@IsOptional()
	public rating?: number;

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
