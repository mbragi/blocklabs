import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	email: string;
	@IsStrongPassword()
	@IsString()
	@IsNotEmpty()
	password: string;
	@IsString()
	@IsOptional()
	role: string;
	@IsString()
	@IsNotEmpty()
	fullName: string;
}
