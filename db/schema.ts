import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

const tabs = sqliteTable("tabs", {
  id: int().primaryKey({ autoIncrement: true }),
  url: text().notNull(),
});

export const schema = { tabs };
export default schema;
