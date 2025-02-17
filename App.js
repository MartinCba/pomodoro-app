import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import "./global.css";
import { Header } from "./src/components/Header";
import { Timer } from "./src/components/Timer";
import { Button } from "./src/components/Button";
import { Audio } from "expo-av";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];
const optionsTimes = { 0: 25, 1: 5, 2: 15 };

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (time === 0) {
      setIsActive(false);
      setTime(optionsTimes[currentTime] * 60);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  async function playSound() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/click.mp3")
      );
      await sound.playAsync();
    } catch (error) {
      console.error("Error al reproducir el audio:", error);
    }
  }

  function handleStartStop() {
    playSound();
    setIsActive(!isActive);
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors[currentTime], flex: 1 }}>
      <View className='justify-start items-start top-16 w-full px-6'>
        <Text className='font-bold text-5xl '>Pomodoro</Text>
        <Header
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setIsActive={setIsActive}
        />
        <Timer time={time} />
        <Button handleStartStop={handleStartStop} isActive={isActive} />
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}
