import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";

const expoSQLite = SQLite.openDatabaseSync("db.sqlite");
export const db = drizzle(expoSQLite);
