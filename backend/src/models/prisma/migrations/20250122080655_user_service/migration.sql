-- CreateTable
CREATE TABLE `userservice` (
    `UserServiceId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserId` INTEGER NULL,
    `SkillsImgIcon1` VARCHAR(255) NULL,
    `SkillsImgIcon2` VARCHAR(255) NULL,
    `SkillsImgIcon3` VARCHAR(255) NULL,
    `SkillsImgIcon4` VARCHAR(255) NULL,
    `SkillsImgIcon5` VARCHAR(255) NULL,

    INDEX `FK_UserService`(`UserId`),
    PRIMARY KEY (`UserServiceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userservice` ADD CONSTRAINT `FK_UserService` FOREIGN KEY (`UserId`) REFERENCES `user`(`UserId`) ON DELETE CASCADE ON UPDATE RESTRICT;
