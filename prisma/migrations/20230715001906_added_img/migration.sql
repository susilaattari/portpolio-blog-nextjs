/*
  Warnings:

  - Added the required column `tahun` to the `portfolio` table without a default value. This is not possible if the table is not empty.
  - Made the column `img` on table `portfolio` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `portfolio` ADD COLUMN `tahun` DATETIME(3) NOT NULL,
    MODIFY `img` VARCHAR(191) NOT NULL;
