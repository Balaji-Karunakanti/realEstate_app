import { View, Text,Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";

const Profile = () => {
  return (
    <SafeAreaView className="">
      <View  className=" mt-8 flex flex-row justify-between">
        <Text className="ml-5 font-bold text-lg ">Profile</Text>
        <View className="mr-10">
          <Image className="w-7 h-7" source={icons.bell} />
        </View>
        
      </View>
       <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold mt-2">shiva</Text>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Profile;
