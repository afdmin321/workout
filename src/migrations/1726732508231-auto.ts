import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1726732508231 implements MigrationInterface {
    name = 'Auto1726732508231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "index"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "index" integer`);
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "index"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "index" numeric`);
    }

}
