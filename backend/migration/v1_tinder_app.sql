-- ----------------------------
-- Sequence structure for user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_id_seq";
CREATE SEQUENCE "public"."user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for swipe
-- ----------------------------
DROP TABLE IF EXISTS "public"."swipe";
CREATE TABLE "public"."swipe" (
  "swipe_sender" int4 NOT NULL,
  "swipe_receiver" int4 NOT NULL,
  "is_like" bool
)
;

-- ----------------------------
-- Records of swipe
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
),
  "first_name" text COLLATE "pg_catalog"."default" NOT NULL,
  "last_name" text COLLATE "pg_catalog"."default" NOT NULL,
  "year_of_birth" int2,
  "picture" text COLLATE "pg_catalog"."default",
  "email" text COLLATE "pg_catalog"."default",
  "title" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (1, 'Heinz-Georg', 'Fiedler', 1990, 'https://randomuser.me/api/portraits/men/81.jpg', 'heinz-georg.fiedler@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (2, 'Katie', 'Hughes', 1996, 'https://randomuser.me/api/portraits/women/74.jpg', 'katie.hughes@example.com', 'miss');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (3, 'Vetle', 'Aasland', 1994, 'https://randomuser.me/api/portraits/men/97.jpg', 'vetle.aasland@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (4, 'Dylan', 'Vasquez', 1990, 'https://randomuser.me/api/portraits/men/66.jpg', 'dylan.vasquez@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (5, 'Margarita', 'Vicente', 1990, 'https://randomuser.me/api/portraits/women/5.jpg', 'margarita.vicente@example.com', 'miss');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (6, 'Joey', 'Oliver', 1997, 'https://randomuser.me/api/portraits/men/61.jpg', 'joey.oliver@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (7, 'Lilja', 'Lampinen', 1990, 'https://randomuser.me/api/portraits/women/50.jpg', 'lilja.lampinen@example.com', 'ms');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (8, 'Abigail', 'Liu', 1992, 'https://randomuser.me/api/portraits/women/83.jpg', 'abigail.liu@example.com', 'miss');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (9, 'Melanie', 'Pilz', 1993, 'https://randomuser.me/api/portraits/women/32.jpg', 'melanie.pilz@example.com', 'miss');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (10, 'Evan', 'Carlson', 1989, 'https://randomuser.me/api/portraits/men/80.jpg', 'evan.carlson@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (11, 'Thang', 'Ngo', 1994, 'https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144857620.jpg', 'thangnq1001@gmail.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (12, 'Heinz-Georg 2', 'Fiedler', 1990, 'https://randomuser.me/api/portraits/men/81.jpg', 'heinz-georg.fiedler@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (13, 'Katie 2', 'Hughes', 1996, 'https://randomuser.me/api/portraits/women/74.jpg', 'katie.hughes@example.com', 'miss');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (14, 'Vetle 2', 'Aasland', 1994, 'https://randomuser.me/api/portraits/men/97.jpg', 'vetle.aasland@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (15, 'Dylan 2', 'Vasquez', 1990, 'https://randomuser.me/api/portraits/men/66.jpg', 'dylan.vasquez@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (16, 'Margarita 2', 'Vicente', 1990, 'https://randomuser.me/api/portraits/women/5.jpg', 'margarita.vicente@example.com', 'miss');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (17, 'Joey 2', 'Oliver', 1997, 'https://randomuser.me/api/portraits/men/61.jpg', 'joey.oliver@example.com', 'mr');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (18, 'Lilja 2', 'Lampinen', 1990, 'https://randomuser.me/api/portraits/women/50.jpg', 'lilja.lampinen@example.com', 'ms');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (19, 'Abigail 2', 'Liu', 1992, 'https://randomuser.me/api/portraits/women/83.jpg', 'abigail.liu@example.com', 'miss');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (20, 'Melanie 2', 'Pilz', 1993, 'https://randomuser.me/api/portraits/women/32.jpg', 'melanie.pilz@example.com', 'miss');
INSERT INTO "public"."user" OVERRIDING SYSTEM VALUE VALUES (21, 'Evan 2', 'Carlson', 1989, 'https://randomuser.me/api/portraits/men/80.jpg', 'evan.carlson@example.com', 'mr');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."user_id_seq"
OWNED BY "public"."user"."id";
SELECT setval('"public"."user_id_seq"', 22, true);

-- ----------------------------
-- Primary Key structure for table swipe
-- ----------------------------
ALTER TABLE "public"."swipe" ADD CONSTRAINT "swipe_pkey" PRIMARY KEY ("swipe_sender", "swipe_receiver");

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table swipe
-- ----------------------------
ALTER TABLE "public"."swipe" ADD CONSTRAINT "swipe_swipe_receiver_fkey" FOREIGN KEY ("swipe_receiver") REFERENCES "public"."user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."swipe" ADD CONSTRAINT "swipe_swipe_sender_fkey" FOREIGN KEY ("swipe_sender") REFERENCES "public"."user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
