import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 import { cards } from "@/constants/data";
 import { featuredCards } from "@/constants/data";
export default function Index() {
 
  return (
    <SafeAreaView className="bg-white h-full">
       
        <FlatList 
           data ={cards}
           renderItem={({item})=>(
             <Card  title ={item.title} location= {item.location} price = {item.price} rating = {item.rating} image={item.image} />
           )}
           keyExtractor={(item)=> item.toString()}
           numColumns={2}
           contentContainerClassName="pb-32"
           columnWrapperClassName="flex gap-5 px-5"
           showsVerticalScrollIndicator={false}
           ListHeaderComponent={   <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image className="size-12 rounded-full" source={images.avatar} />

            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs text-black-100 font-rubik">
               
                Good Morning
              </Text>
              <Text className="font-bold">Shiva!</Text>
            </View>
          </View>
          <Image className="size-6" source={icons.bell} />
        </View>

        <Search />

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-bold text-xl text-black-300 ">Featured</Text>
            <TouchableOpacity>
              
              <Text className="text-base  text-primary-300 ">See All</Text>
            </TouchableOpacity>
          </View>
         
         <FlatList data={featuredCards} 
              renderItem={({item}) => <FeaturedCard  title ={item.title} location= {item.location} price = {item.price} rating = {item.rating} image={item.image} />}
               keyExtractor={(item)=> item.toString()}
               horizontal={true}
               contentContainerClassName="flex gap-5 mt-3"
               bounces ={false}
               showsHorizontalScrollIndicator={false}
           /> 
        
        </View>
        <View className="flex  flex-row items-center justify-between">
          <Text className="font-bold text-xl text-black-300 ">
            Our Recommendations
          </Text>
          <TouchableOpacity>
            
            <Text className="text-base  text-primary-300 "> See all </Text>
          </TouchableOpacity>
        </View>
        <Filters />
     
       
      </View>}
        />
   
    </SafeAreaView>
  );
}
