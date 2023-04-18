import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const emoji = '👋';

  return (
    <View>
      <SafeAreaView>
        <View className="flex-row  justify-between items-center mx-4 ">
          <View className="flex-col  pt-2">
            <Text className="text-lg"> {emoji} Hello</Text>
            <Text className="font-bold text-xl">Kyle Sams</Text>
          </View>
          <View className="p-3">
            <Image source={require('./assets/avatar.png')} />
          </View>
        </View>
        <View className=" border-2 border-gray-300 rounded-2xl  bg-[#eef6fc] m-4  flex-row items-center ">
          <Icon
            name="search-outline"
            size={30}
            color="#000"
            className=""
          />
          <TextInput className="" placeholder="Search medical..." />
          
        </View>

        <View>
  <Text className="font-bold text-xl px-4">
    Services
  </Text>

  

        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
