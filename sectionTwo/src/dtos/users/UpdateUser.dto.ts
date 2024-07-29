import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	fullName: string;

	@IsOptional()
	@IsString()
	email: string;

	@IsOptional()
	@IsString()
	city: string;

	@IsOptional()
	@IsString()
	region: string;

	@IsOptional()
	@IsString()
	address: string;

	@IsOptional()
	@IsString()
	phoneNumber: string;
}
