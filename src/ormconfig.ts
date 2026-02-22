import { DataSource } from "typeorm";
import {User} from "./entities/User";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'lesson_13',
    password: 'password',
    database: 'lesson_13',
    synchronize: false,
    migrations: ["./src/migrations/*.ts"],
    entities: [
        User,
        __dirname + "/entities/**/*.ts"
    ]
});