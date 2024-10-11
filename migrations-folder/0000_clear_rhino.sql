CREATE TABLE IF NOT EXISTS "ideas" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	"vote" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL
);
