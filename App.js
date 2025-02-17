import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { useState } from "react";
import "./global.css";
import { Header } from "./src/components/Header";
import { Timer } from "./src/components/Timer";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  return (
    <SafeAreaView style={{ backgroundColor: colors[currentTime], flex: 1 }}>
      <View className='justify-start items-start top-16 w-full px-6'>
        <Text className='font-bold text-5xl '>Pomodoro</Text>
        <Header
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <Timer time={time} />
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}
