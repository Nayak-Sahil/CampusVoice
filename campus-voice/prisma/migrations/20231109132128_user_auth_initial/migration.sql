-- CreateTable
CREATE TABLE "user_auth" (
    "uid" VARCHAR(20) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(20) NOT NULL,

    CONSTRAINT "user_auth_pkey" PRIMARY KEY ("uid")
);
