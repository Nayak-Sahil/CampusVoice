/*
  Warnings:

  - The primary key for the `subdomain` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `subdom_id` on the `subdomain` table. All the data in the column will be lost.
  - Added the required column `subdomain_id` to the `subdomain` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "issue_type" DROP CONSTRAINT "issue_type_subdomain_id_fkey";

-- AlterTable
ALTER TABLE "subdomain" DROP CONSTRAINT "subdomain_pkey",
DROP COLUMN "subdom_id",
ADD COLUMN     "subdomain_id" INTEGER NOT NULL,
ADD CONSTRAINT "subdomain_pkey" PRIMARY KEY ("subdomain_id");

-- AddForeignKey
ALTER TABLE "issue_type" ADD CONSTRAINT "issue_type_subdomain_id_fkey" FOREIGN KEY ("subdomain_id") REFERENCES "subdomain"("subdomain_id") ON DELETE CASCADE ON UPDATE CASCADE;
