import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Search from '@/components/Search'
import { SafeAreaView } from 'react-native-safe-area-context'
import Filters from '@/components/Filters'
import { cards } from '@/constants/data'
import images from '@/constants/images'
import { Card } from '@/components/Cards'
import icons from '@/constants/icons'
import { useRouter } from 'expo-router'

 
const explore = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handlePress = ()=>{
    router.replace('/(root)/(tabs)');

  }

  return (
   <SafeAreaView className='flex-1' >
     <View className='flex flex-row items-center justify-between mt-5'>
       <TouchableOpacity onPress={handlePress} className=' ml-3  rounded-full flex flex-row size-11 justify-center items-center  bg-primary-200'>
           <Image className='size-5' source={icons.backArrow} />
        </TouchableOpacity>

        <Text className='font-bold'>
          Search For Your Comfort
        </Text>

        <TouchableOpacity className='mr-5' >
           <Image source={icons.bell} className='size-6' />
        </TouchableOpacity>
     </View>
    <View className='mt-3'>
       
     <Search />
    </View>
    <View className='mt-3 ml-3'>
      <Filters/>
    </View>

  
   
    <FlatList 
              data ={cards}
              renderItem={({item})=>(
               
                         <Card  title ={item.title} location= {item.location} price = {item.price} rating = {item.rating} image={item.image} />
              
         
              )}
              keyExtractor={(item)=> item.toString()}
              numColumns={2}
              contentContainerClassName="pb-32 "
              columnWrapperClassName='gap-4 ml-3'
              showsVerticalScrollIndicator={false}
               ListHeaderComponent={
    <View className="px-6 mt-4">
      <Text className="font-bold text-xl">
        Found {cards.length} Properties
      </Text>
    </View>
  }
             />
   </SafeAreaView>
  )
}

export default explore