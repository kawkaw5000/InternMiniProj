-- CreateTable
CREATE TABLE `userservice` (
    `UserServiceId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserId` INTEGER NULL,
    `SkillsImgIcon` VARCHAR(255) NULL,

    INDEX `FK_UserService`(`UserId`),
    PRIMARY KEY (`UserServiceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userservice` ADD CONSTRAINT `FK_UserService` FOREIGN KEY (`UserId`) REFERENCES `user`(`UserId`) ON DELETE CASCADE ON UPDATE RESTRICT;
