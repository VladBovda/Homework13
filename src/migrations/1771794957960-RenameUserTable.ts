import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameUserTable1700000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable("user", "users");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable("users", "user");
  }
}