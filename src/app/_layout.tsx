import "@/global.css";
import { Slot } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "@@/drizzle/migrations";
import { db } from "@/storage/db";

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);

  if (error || !success) {
    console.error(error);
  }
  if (success) {
    console.log("success on migrations");
  }

  return (
    <KeyboardProvider>
      <Slot />
    </KeyboardProvider>
  );
}
