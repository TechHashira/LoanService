import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class MigBeta1615362562404 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
