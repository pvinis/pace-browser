import { Text, View } from "react-native";
import { verifyInstallation } from "nativewind";

export default function Index() {
  verifyInstallation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edi this screen.</Text>
      <View className="bg-red-500">
        <Text>Hello</Text>
      </View>
    </View>
  );
}
