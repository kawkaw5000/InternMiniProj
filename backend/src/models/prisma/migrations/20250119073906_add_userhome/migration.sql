-- CreateTable
CREATE TABLE `user` (
    `UserId` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(50) NULL,
    `Password` VARCHAR(255) NULL,

    PRIMARY KEY (`UserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userhome` (
    `UserHomeId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserId` INTEGER NULL,
    `UserImg` VARCHAR(255) NULL,
    `ImgBox1` VARCHAR(255) NULL,
    `ImgBox2` VARCHAR(255) NULL,
    `ImgBox3` VARCHAR(255) NULL,
    `ImgBox4` VARCHAR(255) NULL,
    `ImgBox5` VARCHAR(255) NULL,
    `ImgBox6` VARCHAR(255) NULL,
    `ImgBox7` VARCHAR(255) NULL,
    `ImgBox8` VARCHAR(255) NULL,
    `ImgBox9` VARCHAR(255) NULL,
    `ImgBox10` VARCHAR(255) NULL,

    INDEX `FK_User`(`UserId`),
    PRIMARY KEY (`UserHomeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userhome` ADD CONSTRAINT `FK_User` FOREIGN KEY (`UserId`) REFERENCES `user`(`UserId`) ON DELETE RESTRICT ON UPDATE RESTRICT;
