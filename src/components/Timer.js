import { View, Text } from "react-native";

export const Timer = ({ time }) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return (
    <View className='bg-slate-50 rounded-[10px] w-full p-6 h-60 items-center justify-center'>
      <Text className='text-[80px] font-bold'>{formattedTime}</Text>
    </View>
  );
};
