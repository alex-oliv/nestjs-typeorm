import { MigrationInterface, QueryRunner } from 'typeorm';

export class usersView1669025539200 implements MigrationInterface {
  name = 'usersView1669025539200';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "persons"."users" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE VIEW "persons"."users_view" AS SELECT * FROM persons.users`,
    );
    await queryRunner.query(
      `INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`,
      ['persons', 'VIEW', 'users_view', 'SELECT * FROM persons.users'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`,
      ['VIEW', 'users_view', 'persons'],
    );
    await queryRunner.query(`DROP VIEW "persons"."users_view"`);
    await queryRunner.query(`DROP TABLE "persons"."users"`);
  }
}
