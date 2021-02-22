import {MigrationInterface, QueryRunner} from "typeorm";

export class ThirdMigration1613952088455 implements MigrationInterface {
    name = 'ThirdMigration1613952088455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `loan` (`id` int NOT NULL AUTO_INCREMENT, `loanAmounth` int NOT NULL, `interest` int NOT NULL, `monthlyFee` int NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_saving` (`id` int NOT NULL AUTO_INCREMENT, `dividendsEarned` int NOT NULL, `monthlySavingRate` int NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `worksheet` (`id` int NOT NULL AUTO_INCREMENT, `adminId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `worksheet_user` (`id` int NOT NULL AUTO_INCREMENT, `userId` int NULL, `worksheetId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `role` enum ('ADMIN_ROLE', 'USER_A_ROLE', 'USER_B_ROLE') NOT NULL DEFAULT 'USER_A_ROLE', `fullname` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `telephone` varchar(255) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `admin` (`id` int NOT NULL AUTO_INCREMENT, `userId` int NULL, UNIQUE INDEX `REL_f8a889c4362d78f056960ca6da` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `loan` ADD CONSTRAINT `FK_ef7a63b4c4f0edd90e389edb103` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_saving` ADD CONSTRAINT `FK_6692fda83d02930e59f6fc2123b` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `worksheet` ADD CONSTRAINT `FK_8ab33e658669004035d99996d24` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `worksheet_user` ADD CONSTRAINT `FK_cced532fc9384b4bbe42ea97625` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `worksheet_user` ADD CONSTRAINT `FK_9412d01b95e6fedfcb72af8a5ed` FOREIGN KEY (`worksheetId`) REFERENCES `worksheet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `admin` ADD CONSTRAINT `FK_f8a889c4362d78f056960ca6dad` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `admin` DROP FOREIGN KEY `FK_f8a889c4362d78f056960ca6dad`");
        await queryRunner.query("ALTER TABLE `worksheet_user` DROP FOREIGN KEY `FK_9412d01b95e6fedfcb72af8a5ed`");
        await queryRunner.query("ALTER TABLE `worksheet_user` DROP FOREIGN KEY `FK_cced532fc9384b4bbe42ea97625`");
        await queryRunner.query("ALTER TABLE `worksheet` DROP FOREIGN KEY `FK_8ab33e658669004035d99996d24`");
        await queryRunner.query("ALTER TABLE `user_saving` DROP FOREIGN KEY `FK_6692fda83d02930e59f6fc2123b`");
        await queryRunner.query("ALTER TABLE `loan` DROP FOREIGN KEY `FK_ef7a63b4c4f0edd90e389edb103`");
        await queryRunner.query("DROP INDEX `REL_f8a889c4362d78f056960ca6da` ON `admin`");
        await queryRunner.query("DROP TABLE `admin`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `worksheet_user`");
        await queryRunner.query("DROP TABLE `worksheet`");
        await queryRunner.query("DROP TABLE `user_saving`");
        await queryRunner.query("DROP TABLE `loan`");
    }

}
