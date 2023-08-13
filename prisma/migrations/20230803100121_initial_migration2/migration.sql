/*
  Warnings:

  - Added the required column `name` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `message` ADD COLUMN `name` VARCHAR(191) NOT NULL;
