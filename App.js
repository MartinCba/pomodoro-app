import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useState } from "react";
import "./global.css";
import { Header } from "./src/components/Header";

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  return (
    <View className='justify-start items-start top-16 w-full '>
      <Text className='font-bold text-3xl '>Pomodoro</Text>
      <Text className='font-bold text-3xl '>{time}</Text>
      <Header
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <StatusBar style='auto' />
    </View>
  );
}
