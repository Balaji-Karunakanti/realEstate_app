import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface props {
  onPress?: () => void;
}
export const FeaturedCard = ({ onPress }: props) => {
  return (
    <TouchableOpacity
      className=" mt-4 relative w-60 h-80 rounded-2xl overflow-hidden"
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Background Image */}
      <Image
        source={images.japan}
        className="w-full h-full"
        resizeMode="cover"
      />

      {/* Gradient Overlay */}
      <Image
        source={images.cardGradient}
        className="absolute bottom-0 w-full h-full"
        resizeMode="cover"
      />

      {/* Rating Badge */}
      <View className="absolute top-5 right-5 flex-row items-center bg-white/95 px-2.5 py-1.5 rounded-full">
        <Image source={icons.star} className="w-4 h-4" />
        <Text className="ml-1 text-xs font-bold text-primary-300">4.9</Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text className="text-xl font-bold text-white" numberOfLines={1}>
          {" "}
          Modern Apartment
        </Text>
        <Text className="text-base  text-white"> 22 W 15th St,sec,hyd</Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-white  text-l ml-1">RS.5000</Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: props) => {
  return (
    <TouchableOpacity onPress={onPress } className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative  ">
        <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
           4.4
        </Text>
      </View>
    
     <Image source={images.newYork} className="w-full h-40 rounded-lg" />
      <View className="flex flex-col mt-2">
        <Text className="text-base font-bold text-black-300">
           Cozy Studio
        </Text>
        <Text className="text-xs  text-black-300">
           Hyd
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
             RS.5000
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
