import { View, Text,Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";


interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProp) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-3"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className="size-5 mr-5" />}
  </TouchableOpacity>
);
const Profile = () => {
  function handleLogout(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <SafeAreaView className="">
      <View  className=" mt-8 flex flex-row justify-between">
        <Text className="ml-5 font-bold text-lg ">Profile</Text>
        <View className="mr-10">
          <Image className="w-7 h-7" source={icons.bell} />
        </View>
        
      </View>
       <View className="flex mt-8 flex-row justify-center">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-40 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-8" />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold mt-2">shiva</Text>
          </View>
        </View>
<View className="ml-5">
         <View className="flex flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        <View className="flex flex-col border-t mt-5 pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
        </View>
    </SafeAreaView>
  );
};

export default Profile;
