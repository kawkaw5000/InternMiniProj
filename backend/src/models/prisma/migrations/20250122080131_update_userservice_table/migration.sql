/*
  Warnings:

  - You are about to drop the column `SkillsImgIcon` on the `userservice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `userservice` DROP COLUMN `SkillsImgIcon`,
    ADD COLUMN `SkillsImgIcon1` VARCHAR(255) NULL,
    ADD COLUMN `SkillsImgIcon2` VARCHAR(255) NULL,
    ADD COLUMN `SkillsImgIcon3` VARCHAR(255) NULL,
    ADD COLUMN `SkillsImgIcon4` VARCHAR(255) NULL,
    ADD COLUMN `SkillsImgIcon5` VARCHAR(255) NULL;
