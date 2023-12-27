/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user_info` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_info_uid_key";

-- AlterTable
ALTER TABLE "user_info" ADD CONSTRAINT "user_info_pkey" PRIMARY KEY ("uid");

-- CreateIndex
CREATE UNIQUE INDEX "user_info_email_key" ON "user_info"("email");
