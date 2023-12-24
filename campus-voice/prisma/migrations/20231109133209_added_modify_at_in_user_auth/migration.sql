/*
  Warnings:

  - Added the required column `modifyAt` to the `user_auth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_auth" ADD COLUMN     "modifyAt" DATE NOT NULL;
