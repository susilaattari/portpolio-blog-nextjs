/*
  Warnings:

  - Added the required column `conten` to the `contents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `contents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contents` ADD COLUMN `conten` MEDIUMTEXT NOT NULL,
    ADD COLUMN `img` VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE `portfolio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
