import "@/global.css";
import { Slot } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <Slot />
    </KeyboardProvider>
  );
}
