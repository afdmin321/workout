import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1723811418721 implements MigrationInterface {
    name = 'Auto1723811418721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "index" integer NOT NULL, "src" character varying NOT NULL, CONSTRAINT "PK_65d7a1ef91ddafb3e7071b188a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD "articleNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_products" ADD "price" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "order_products" DROP COLUMN "articleNumber"`);
        await queryRunner.query(`ALTER TABLE "order_products" DROP COLUMN "name"`);
        await queryRunner.query(`DROP TABLE "gallery"`);
    }

}
