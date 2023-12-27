-- CreateTable
CREATE TABLE "user_info" (
    "uid" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_info_uid_key" ON "user_info"("uid");

-- AddForeignKey
ALTER TABLE "user_info" ADD CONSTRAINT "user_info_uid_fkey" FOREIGN KEY ("uid") REFERENCES "user_auth"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
