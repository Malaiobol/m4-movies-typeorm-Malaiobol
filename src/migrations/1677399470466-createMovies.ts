import { MigrationInterface, QueryRunner } from "typeorm";

export class createMovies1677399470466 implements MigrationInterface {
    name = 'createMovies1677399470466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" character varying`);
    }

}
