import {MigrationInterface, QueryRunner} from "typeorm";

export class lucasb1602640680698 implements MigrationInterface {
    name = 'lucasb1602640680698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test"."Customer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "company" character varying NOT NULL, "position" character varying NOT NULL, "birthday" integer NOT NULL, CONSTRAINT "UQ_5bbb6576cdd98be16e2c29085b1" UNIQUE ("email"), CONSTRAINT "PK_2bac315a4c5f092ec3a9289ee41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test"."customer_lucas_b" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "company" character varying NOT NULL, "position" character varying NOT NULL, "birthday" date NOT NULL, CONSTRAINT "UQ_50216e337671b027ce37ac8d8f1" UNIQUE ("email"), CONSTRAINT "PK_ab1e375baead7551d3b91aeed66" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" DROP COLUMN "company"`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" ADD "company" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" ADD "position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" ADD "birthday" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test"."Customer" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" DROP COLUMN "company"`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" ADD "birthday" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" ADD "position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test"."Customer" ADD "company" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "test"."customer_lucas_b"`);
        await queryRunner.query(`DROP TABLE "test"."Customer"`);
    }

}
