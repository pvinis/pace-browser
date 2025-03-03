import { useState } from "react";
import { TextInput, View } from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import { WebView } from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const [url, setUrl] = useState("https://google.com");
  const [uri, setUri] = useState(url);
  const saInsets = useSafeAreaInsets();

  const goToUrl = () => {
    setUri(url);
  };

  return (
    <View className="flex-1 bg-red-500 py-safe">
      <WebView className="flex-1" source={{ uri }} pullToRefreshEnabled />
      <KeyboardStickyView offset={{ opened: saInsets.bottom + 34, closed: 0 }}>
        <View className="bg-blue-500 mb-safe">
          <View className="bg-blue-300 py-2 px-4 my-2 mx-4 rounded-lg">
            <TextInput
              keyboardType="url"
              value={url}
              onChangeText={setUrl}
              onSubmitEditing={goToUrl}
            />
          </View>
        </View>
      </KeyboardStickyView>
    </View>
  );
}
