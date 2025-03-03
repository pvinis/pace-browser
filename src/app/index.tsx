import "../global.css";

import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <View className="flex-1 bg-red-500 py-safe">
      <WebView
        source={{ uri: "https://google.com" }}
        // originWhitelist={["*"]}
        // source={{ html: "<h1><center>Hello world</center></h1>" }}
      />
      <Text>Edit app/index.tsx to edi this screen.</Text>
      <View className="bg-blue-500">
        <Text>Hello</Text>
      </View>
    </View>
  );
}
