import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500 font-bold text-3xl">Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


