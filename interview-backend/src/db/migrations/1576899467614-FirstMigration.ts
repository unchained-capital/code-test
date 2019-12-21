import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1576899467614 implements MigrationInterface {
    name = 'FirstMigration1576899467614'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "public"."todo_entity" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_14dd7c95b3c89ce0eee17f90055" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "public"."todo_entity"`, undefined);
    }

}
