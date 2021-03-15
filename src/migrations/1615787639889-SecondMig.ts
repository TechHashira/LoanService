import { MigrationInterface, QueryRunner } from 'typeorm';

export class SecondMig1615787639889 implements MigrationInterface {
  name = 'SecondMig1615787639889';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `worksheet_user` ADD `userdId` int NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `loan` DROP FOREIGN KEY `FK_ef7a63b4c4f0edd90e389edb103`',
    );
    await queryRunner.query(
      'ALTER TABLE `loan` CHANGE `userId` `userId` int NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet_user` DROP FOREIGN KEY `FK_9412d01b95e6fedfcb72af8a5ed`',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet_user` CHANGE `worksheetId` `worksheetId` int NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet` DROP FOREIGN KEY `FK_8ab33e658669004035d99996d24`',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet` CHANGE `adminId` `adminId` int NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `loan` ADD CONSTRAINT `FK_ef7a63b4c4f0edd90e389edb103` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet_user` ADD CONSTRAINT `FK_9412d01b95e6fedfcb72af8a5ed` FOREIGN KEY (`worksheetId`) REFERENCES `worksheet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet` ADD CONSTRAINT `FK_8ab33e658669004035d99996d24` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `worksheet` DROP FOREIGN KEY `FK_8ab33e658669004035d99996d24`',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet_user` DROP FOREIGN KEY `FK_9412d01b95e6fedfcb72af8a5ed`',
    );
    await queryRunner.query(
      'ALTER TABLE `loan` DROP FOREIGN KEY `FK_ef7a63b4c4f0edd90e389edb103`',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet` CHANGE `adminId` `adminId` int NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet` ADD CONSTRAINT `FK_8ab33e658669004035d99996d24` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet_user` CHANGE `worksheetId` `worksheetId` int NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet_user` ADD CONSTRAINT `FK_9412d01b95e6fedfcb72af8a5ed` FOREIGN KEY (`worksheetId`) REFERENCES `worksheet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `loan` CHANGE `userId` `userId` int NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `loan` ADD CONSTRAINT `FK_ef7a63b4c4f0edd90e389edb103` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `worksheet_user` DROP COLUMN `userdId`',
    );
  }
}
