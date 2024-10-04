import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1726644290478 implements MigrationInterface {
    name = 'Auto1726644290478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" ADD "index" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "index"`);
    }

}
