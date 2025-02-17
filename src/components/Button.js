import { TouchableOpacity, Text } from "react-native";

export const Button = ({ isActive, handleStartStop }) => {
  return (
    <TouchableOpacity
      android_disableSound={true}
      onPress={handleStartStop}
      className={"bg-slate-800 p-4 mt-4 rounded-[10px] w-full items-center"}
    >
      <Text className={"font-bold color-white"}>
        {isActive ? "STOP" : "START"}
      </Text>
    </TouchableOpacity>
  );
};
