import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'
import profile from './profile';

const TabIcon = ({focused,icon,title}:{focused:boolean; icon:any; title:string})=>(
  <View className=' mt-3 flex flex-col justify-center items-center'>
    <Image className='size-7' source={icon} tintColor={focused ? '#0061ff' : '#666876'}  resizeMode='contain'/>
    <Text className='w-full' >{title}</Text>
  </View>
)


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor:'white',
        position:'absolute',
        borderTopColor:'#0061FF1A',
        borderTopWidth:1,
        minHeight:70
      }
    }}
    >
      <Tabs.Screen name="index" options={{
        title:"home",
        headerShown:false,
        tabBarIcon:({focused})=>{
           return <View>
           <TabIcon icon={icons.home} focused ={focused} title='home'  />
          </View>
        }
      }}   />
       <Tabs.Screen name="explore" options={{
        title:"explore",
        headerShown:false,
        tabBarIcon:({focused})=>{
           return <View>
           <TabIcon icon={icons.search} focused ={focused} title='explore'  />
          </View>
        }
      }}   />
       <Tabs.Screen name="profile" options={{
        title:"profile",
        headerShown:false,
        tabBarIcon:({focused})=>{
           return <View>
           <TabIcon icon={icons.person} focused ={focused} title='profile'  />
          </View>
        }
      }}   />
    </Tabs>
  )
}

export default TabsLayout