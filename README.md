## Quick Start

Follow these steps to get the project up and running on your local machine.

### 1. Database Setup
Ensure that your **PostgreSQL** server is active and you have created a database for the project.

### 2. Run Migrations
Execute the following command to set up your database schema:
```bash
npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts
```
###3. Launch the app

```bash
npm run start
