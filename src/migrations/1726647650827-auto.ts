import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1726647650827 implements MigrationInterface {
    name = 'Auto1726647650827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "index"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "index" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "index"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "index" numeric`);
    }

}
