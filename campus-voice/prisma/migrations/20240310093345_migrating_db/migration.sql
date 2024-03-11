-- CreateTable
CREATE TABLE "user_auth" (
    "uid" VARCHAR(20) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "modifyAt" DATE NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_auth_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "user_info" (
    "uid" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_info_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "resolver" (
    "resolver_id" VARCHAR(20) NOT NULL,
    "resolver_role" VARCHAR(50) NOT NULL,

    CONSTRAINT "resolver_pkey" PRIMARY KEY ("resolver_id")
);

-- CreateTable
CREATE TABLE "domain" (
    "domain_id" SERIAL NOT NULL,
    "domain_name" VARCHAR(100) NOT NULL,
    "domain_desc" VARCHAR(255) NOT NULL,
    "master_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "domain_pkey" PRIMARY KEY ("domain_id")
);

-- CreateTable
CREATE TABLE "subdomain" (
    "subdomain_id" INTEGER NOT NULL,
    "domain_id" INTEGER NOT NULL,
    "subdomain_name" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "master_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "subdomain_pkey" PRIMARY KEY ("subdomain_id")
);

-- CreateTable
CREATE TABLE "issue_type" (
    "issue_id" VARCHAR(6) NOT NULL,
    "issue_type" VARCHAR(255) NOT NULL,
    "subdomain_id" INTEGER NOT NULL,
    "created_by" VARCHAR(20) NOT NULL,

    CONSTRAINT "issue_type_pkey" PRIMARY KEY ("issue_id")
);

-- CreateTable
CREATE TABLE "issue_mapping" (
    "map_id" SERIAL NOT NULL,
    "issue_id" VARCHAR(6) NOT NULL,
    "resolver_id" VARCHAR(20) NOT NULL,
    "master_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "issue_mapping_pkey" PRIMARY KEY ("map_id")
);

-- CreateTable
CREATE TABLE "queries" (
    "query_id" SERIAL NOT NULL,
    "sender_id" VARCHAR(20) NOT NULL,
    "receiver_id" VARCHAR(20) NOT NULL,
    "issue_id" VARCHAR(6) NOT NULL,
    "query_title" VARCHAR(100) NOT NULL,
    "query_desc" VARCHAR(3000) NOT NULL,
    "query_type" VARCHAR(20) NOT NULL DEFAULT 'local',
    "identity" BOOLEAN NOT NULL DEFAULT true,
    "query_status" VARCHAR(20) NOT NULL DEFAULT 'sent',
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "queries_pkey" PRIMARY KEY ("query_id")
);

-- CreateTable
CREATE TABLE "query_images" (
    "query_id" INTEGER NOT NULL,
    "image" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_info_email_key" ON "user_info"("email");

-- CreateIndex
CREATE UNIQUE INDEX "query_images_query_id_image_key" ON "query_images"("query_id", "image");

-- AddForeignKey
ALTER TABLE "user_info" ADD CONSTRAINT "user_info_uid_fkey" FOREIGN KEY ("uid") REFERENCES "user_auth"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resolver" ADD CONSTRAINT "resolver_resolver_id_fkey" FOREIGN KEY ("resolver_id") REFERENCES "user_auth"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "domain" ADD CONSTRAINT "domain_master_id_fkey" FOREIGN KEY ("master_id") REFERENCES "resolver"("resolver_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subdomain" ADD CONSTRAINT "subdomain_master_id_fkey" FOREIGN KEY ("master_id") REFERENCES "resolver"("resolver_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subdomain" ADD CONSTRAINT "subdomain_domain_id_fkey" FOREIGN KEY ("domain_id") REFERENCES "domain"("domain_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issue_type" ADD CONSTRAINT "issue_type_subdomain_id_fkey" FOREIGN KEY ("subdomain_id") REFERENCES "subdomain"("subdomain_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issue_type" ADD CONSTRAINT "issue_type_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "resolver"("resolver_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issue_mapping" ADD CONSTRAINT "issue_mapping_issue_id_fkey" FOREIGN KEY ("issue_id") REFERENCES "issue_type"("issue_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issue_mapping" ADD CONSTRAINT "issue_mapping_resolver_id_fkey" FOREIGN KEY ("resolver_id") REFERENCES "resolver"("resolver_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issue_mapping" ADD CONSTRAINT "issue_mapping_master_id_fkey" FOREIGN KEY ("master_id") REFERENCES "resolver"("resolver_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "queries" ADD CONSTRAINT "queries_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "user_auth"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "queries" ADD CONSTRAINT "queries_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "resolver"("resolver_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "queries" ADD CONSTRAINT "queries_issue_id_fkey" FOREIGN KEY ("issue_id") REFERENCES "issue_type"("issue_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "query_images" ADD CONSTRAINT "query_images_query_id_fkey" FOREIGN KEY ("query_id") REFERENCES "queries"("query_id") ON DELETE CASCADE ON UPDATE CASCADE;
