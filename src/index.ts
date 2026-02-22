import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import { AppDataSource } from './data-source/data-source';

const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connection successful");
    } catch (error) {
        console.error("Error during database initialization:", error);
        return;
    }

    const app = createExpressServer({
        controllers: [UserController],
        validation: true,
    });

    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
};

initializeDatabase();

