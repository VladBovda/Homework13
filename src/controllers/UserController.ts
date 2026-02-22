import { Get, Post, Patch, Delete, Param, Body, JsonController, HttpCode, NotFoundError } from "routing-controllers";
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "../dto/UserDto";
import { AppDataSource } from "../data-source/data-source";
import { User } from "../entities/User";

@JsonController()
export class UserController {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    @Get("/")
    getAuthor() {
        return { author: "Vlad" };
    }

    @Get("/users")
    async getAllUsers() {
        return this.userRepository.find();
    }

    @Get("/users/:id")
    async getUserById(@Param("id") id: number) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundError("User not found");
        }
        return user;
    }

    @Post("/users")
    @HttpCode(201)
    async createUser(@Body() body: CreateUserDto) {
        const newUser = this.userRepository.create(body);
        return this.userRepository.save(newUser);
    }

    @Patch("/users/:id")
    async updateUser(@Param("id") id: number, @Body() body: UpdateUserDto) {
        const existingUser = await this.userRepository.findOne({ where: { id } });
        if (!existingUser) {
            throw new NotFoundError("User not found");
        }
        this.userRepository.merge(existingUser, body);
        return this.userRepository.save(existingUser);
    }

    @Delete("/users/:id")
    async deleteUser(@Param("id") id: number) {
        const result = await this.userRepository.delete(id);
        if (!result.affected) {
            throw new NotFoundError("User not found");
        }
        return { message: "User deleted" };
    }
}