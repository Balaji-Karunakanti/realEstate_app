import { Card, FeaturedCard } from "@/components/Cards";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Text, View,Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full" >
      <View className="px-5" >
        <View className="flex flex-row items-center justify-between mt-5" >
             <View className="flex flex-row items-center">
                   <Image className="size-12 rounded-full" source={images.avatar} />

                <View className="flex flex-col items-start ml-2 justify-center">
                        
                    <Text className="text-xs text-black-100 font-rubik"> Good Morning </Text>
                    <Text className="font-bold">Shiva!</Text>
                  </View>   
             </View>
             <Image className="size-6" source={icons.bell} />
        </View>
     
      <Search />

      <View className="my-5">

          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-xl text-black-300 ">Featured</Text>
          <TouchableOpacity> <Text className="text-base  text-primary-300 ">See All</Text> </TouchableOpacity>
          </View>
        <View className="flex flex-row gap-5 mt-5"> 
          <FeaturedCard/>
          <FeaturedCard/>
          <FeaturedCard/>
        </View>
      </View>
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-xl text-black-300 ">Our Recommendations</Text>
          <TouchableOpacity> <Text className="text-base  text-primary-300 "> See all </Text> </TouchableOpacity>
          </View>
    <View className="flex flex-row gap-5 " >
      <Card/>
      <Card/>
      
    </View>
      </View>

    </SafeAreaView>
  );
}
