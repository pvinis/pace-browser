import { useState } from "react";
import "../global.css";
import { Text, TextInput, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  const [url, setUrl] = useState("https://google.com");

  return (
    <View className="flex-1 bg-red-500 py-safe">
      <WebView
        className="flex-1"
        source={{ uri: "https://google.com" }}
        pullToRefreshEnabled
      />
      <View className="bg-blue-500 absolute bottom-safe left-0 right-0">
        <View className="bg-blue-300 py-2 px-4 my-2 mx-4 rounded-lg">
          <TextInput className="" value={url} onChangeText={setUrl} />
        </View>
      </View>
    </View>
  );
}
