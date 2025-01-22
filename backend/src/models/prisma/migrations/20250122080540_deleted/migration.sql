/*
  Warnings:

  - You are about to drop the `userservice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `userservice` DROP FOREIGN KEY `FK_UserService`;

-- DropTable
DROP TABLE `userservice`;
