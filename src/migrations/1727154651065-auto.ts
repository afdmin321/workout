import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1727154651065 implements MigrationInterface {
    name = 'Auto1727154651065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_96fabbb1202770b8e6a58bf6f1d"`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "index"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "index" integer`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "product_id" character varying`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" bigint`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "material"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "material" bigint`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "length"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "length" bigint`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "width"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "width" bigint`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "height" bigint`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "lengthDelivery"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "lengthDelivery" bigint`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "widthDelivery"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "widthDelivery" bigint`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "weightDelivery"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "weightDelivery" bigint`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "heightDelivery"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "heightDelivery" bigint`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_96fabbb1202770b8e6a58bf6f1d" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_96fabbb1202770b8e6a58bf6f1d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "heightDelivery"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "heightDelivery" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "weightDelivery"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "weightDelivery" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "widthDelivery"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "widthDelivery" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "lengthDelivery"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "lengthDelivery" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "height" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "width"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "width" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "length"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "length" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "material"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "material" character varying`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "product_id" uuid`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "index"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "index" numeric`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_96fabbb1202770b8e6a58bf6f1d" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
