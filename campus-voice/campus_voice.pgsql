--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: user_auth; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_auth (
    uid character varying(20) NOT NULL,
    password character varying(255) NOT NULL,
    "modifyAt" date NOT NULL,
    "createdAt" date NOT NULL
);


ALTER TABLE public.user_auth OWNER TO postgres;

--
-- Name: user_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_info (
    uid character varying(20) NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    image character varying(255) NOT NULL
);


ALTER TABLE public.user_info OWNER TO postgres;

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
f81e1c46-c9d4-4df7-bda4-ccff36cda684	d268084299bbadfd7a7bcc2802db3fbe59d045aa2109b445c494c0f16e1c1004	2023-11-09 18:51:28.744233+05:30	20231109132128_user_auth_initial	\N	\N	2023-11-09 18:51:28.617313+05:30	1
06602393-55bf-44e7-8b0e-b4c098f2327f	1ab8ab1caa530e5146d0b1eb770f8dd32958ff38fd1845c84119c1f669e81ea7	2023-11-09 19:02:09.057516+05:30	20231109133209_added_modify_at_in_user_auth	\N	\N	2023-11-09 19:02:09.026439+05:30	1
7835e25a-9e23-4a70-b3a8-a2607ac70bb3	9aad00e338ef0b53ff8c679aab655fdcd8eead02d346ccd7a30741ff0f8c556c	2023-12-25 16:55:52.234025+05:30	20231225112551_modified_user_auth	\N	\N	2023-12-25 16:55:52.030566+05:30	1
07b04ec9-f060-4b39-9b48-209bec5dc8f5	d6508da1e754ef77ddf0ece723de785a7ff0f36ea142ae5fc2e187b91b134a5b	2023-12-25 17:05:05.319238+05:30	20231225113505_modified_user_auth	\N	\N	2023-12-25 17:05:05.169742+05:30	1
f8cb1725-176d-4aa6-ab73-835a30ec53ef	94661cfb157d82bcd24922c3003b66d852f50a549267cbece5b8fd37ee79351f	2023-12-27 17:52:02.713999+05:30	20231227122202_added_user_info_table	\N	\N	2023-12-27 17:52:02.42318+05:30	1
3ef354bf-14bf-4604-bfbf-c33050fc81ad	5c37b278ace4ac42f34196bb0093efcbd2547f34c590044cd30f4375a59d2c3a	2023-12-27 19:11:34.645173+05:30	20231227134134_changes_in_user_info_table	\N	\N	2023-12-27 19:11:34.569584+05:30	1
\.


--
-- Data for Name: user_auth; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_auth (uid, password, "modifyAt", "createdAt") FROM stdin;
01623001	628d02d53b7f3f98e3bd615daca6fb1ee5db8327dbcd9d28a4ad5b4410008016	2023-12-25	2023-12-25
11623001	68fef838fe5953351ff5761081ef47ff0b49c54a1ef2ce18b15edf866d13ffd1	2023-12-27	2023-12-27
\.


--
-- Data for Name: user_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_info (uid, email, name, image) FROM stdin;
01623001	randomemail@gmail.com	Arjav Prajapati	campus_voice/user_profile_pictures/1072_us1xw8.png
11623001	queryresolver@gmail.com	Faculty One	campus_voice/user_profile_pictures/1072_us1xw8.png
\.


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: user_auth user_auth_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_auth
    ADD CONSTRAINT user_auth_pkey PRIMARY KEY (uid);


--
-- Name: user_info user_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_pkey PRIMARY KEY (uid);


--
-- Name: user_info_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX user_info_email_key ON public.user_info USING btree (email);


--
-- Name: user_info user_info_uid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_info
    ADD CONSTRAINT user_info_uid_fkey FOREIGN KEY (uid) REFERENCES public.user_auth(uid) ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

