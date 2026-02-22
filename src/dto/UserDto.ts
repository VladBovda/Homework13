import { IsString, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: "User name is required" })
    username!: string;

    @IsEmail({}, { message: "Invalid email format" })
    @IsNotEmpty({ message: "Email is required" })
    email!: string;
}

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsEmail({}, { message: "Invalid email format" })
    email?: string;
}
