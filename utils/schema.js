// utils/schema.js

import { pgTable, serial, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const Ideas = pgTable('ideas_schema.ideas', {  // Prefix with schema name
    id: serial('id').primaryKey(),
    content: varchar('content', { length: 255 }).notNull(),
    username: varchar('username', { length: 255 }).notNull(),
    vote: integer('vote').default(0),
    created_at: timestamp('created_at').defaultNow().notNull()
});
