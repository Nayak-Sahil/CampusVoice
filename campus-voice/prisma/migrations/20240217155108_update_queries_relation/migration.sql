-- AlterTable
CREATE SEQUENCE queries_query_id_seq;
ALTER TABLE "queries" ALTER COLUMN "query_id" SET DEFAULT nextval('queries_query_id_seq');
ALTER SEQUENCE queries_query_id_seq OWNED BY "queries"."query_id";
