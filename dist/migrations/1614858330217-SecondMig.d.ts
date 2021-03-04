import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SecondMig1614858330217 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
