import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'lesson_13',
    password: 'password',
    database: 'lesson_13',
    synchronize: false,
    logging: true,
    entities: [User],
    migrations: ["../migrations/*.ts"],
});