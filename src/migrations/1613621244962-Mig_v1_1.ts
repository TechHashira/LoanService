import {MigrationInterface, QueryRunner} from "typeorm";

export class MigV111613621244962 implements MigrationInterface {
    name = 'MigV111613621244962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `fullname` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `fullname` `name` varchar(255) NOT NULL");
    }

}
