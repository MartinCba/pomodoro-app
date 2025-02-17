import { View, Text, TouchableOpacity } from "react-native";
const options = ["Pomodoro", "Short Break", "Long Break"];

export const Header = ({ setTime, currentTime, setCurrentTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View className='w-full flex-row '>
      {options.map((option, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          key={index}
          className={`flex-1 border-4 p-2 items-center justify-center ${
            currentTime === index ? "border-black" : "border-transparent"
          }`}
        >
          <Text className='text-center  text-xl'>{option} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
