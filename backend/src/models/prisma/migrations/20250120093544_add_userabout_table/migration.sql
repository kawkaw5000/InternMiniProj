-- DropForeignKey
ALTER TABLE `userhome` DROP FOREIGN KEY `FK_User`;

-- CreateTable
CREATE TABLE `userabout` (
    `UserAboutId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserId` INTEGER NULL,
    `UserImg` VARCHAR(255) NULL,
    `ImgAbout1` VARCHAR(255) NULL,
    `ImgAbout2` VARCHAR(255) NULL,
    `ImgAbout3` VARCHAR(255) NULL,

    INDEX `FK_UserAbout`(`UserId`),
    PRIMARY KEY (`UserAboutId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userhome` ADD CONSTRAINT `FK_UserHome` FOREIGN KEY (`UserId`) REFERENCES `user`(`UserId`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `userabout` ADD CONSTRAINT `FK_UserAbout` FOREIGN KEY (`UserId`) REFERENCES `user`(`UserId`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- RedefineIndex
CREATE INDEX `FK_UserHome` ON `userhome`(`UserId`);
DROP INDEX `FK_User` ON `userhome`;
