-- RedefineIndex
CREATE UNIQUE INDEX `User email key` ON `user`(`email`);
DROP INDEX `User_email_key` ON `user`;
