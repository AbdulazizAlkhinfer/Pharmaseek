<<<<<<< HEAD
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
=======
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
>>>>>>> 1e2898e521740cf7c0f63ab2606110cc1e3ede28

const more = () => {
  const navigation = useNavigation();

  const menuItems = [
<<<<<<< HEAD
    { title: "My Profile", icon: "person-outline", route: "Profile" },
    { title: "Addresses", icon: "location-outline", route: "Addresses" },
    { title: "Support", icon: "headset-outline", route: "Support" },
  ];

  const settingsItems = [
    { title: "Settings", icon: "settings-outline", route: "Settings" },
    { title: "FAQs", icon: "help-circle-outline", route: "FAQs" },
    { title: "About us", icon: "information-circle-outline", route: "About" },
    {
      title: "Terms and conditions",
      icon: "document-text-outline",
      route: "Terms",
    },
    {
      title: "Privacy policy",
      icon: "shield-checkmark-outline",
      route: "Privacy",
    },
=======
    { title: 'My Profile', icon: 'person-outline', route: 'Profile' },
    { title: 'Addresses', icon: 'location-outline', route: 'Addresses' },
    { title: 'Support', icon: 'headset-outline', route: 'Support' },
  ];

  const settingsItems = [
    { title: 'Settings', icon: 'settings-outline', route: 'Settings' },
    { title: 'FAQs', icon: 'help-circle-outline', route: 'FAQs' },
    { title: 'About us', icon: 'information-circle-outline', route: 'About' },
    { title: 'Terms and conditions', icon: 'document-text-outline', route: 'Terms' },
    { title: 'Privacy policy', icon: 'shield-checkmark-outline', route: 'Privacy' },
>>>>>>> 1e2898e521740cf7c0f63ab2606110cc1e3ede28
  ];

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="mt-6" />
<<<<<<< HEAD
      <Text className="text-[17px] mb-4 font-rsemibold">My Account</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="flex-row items-center justify-between py-3 border-b border-gray-200"
          onPress={() => navigation.navigate(item.route)}
          activeOpacity={0.3}
        >
          <View className="flex-row items-center">
            <Ionicons
              name={item.icon}
              size={24}
              className="mr-3"
              color="#154C79"
            />
            <Text className="text-base font-rregular">{item.title}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="#7D7D7D" />
        </TouchableOpacity>
      ))}
      <View className="mt-6" />
      <Text className="text-[17px] mt-4 mb-4 font-rsemibold">App Settings</Text>
      {settingsItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="flex-row items-center justify-between py-3 border-b border-gray-200"
          onPress={() => navigation.navigate(item.route)}
          activeOpacity={0.3}
        >
          <View className="flex-row items-center">
            <Ionicons
              name={item.icon}
              size={24}
              className="mr-3"
              color="#154C79"
            />
            <Text className="text-base font-rregular">{item.title}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="#7D7D7D" />
        </TouchableOpacity>
      ))}
      <View className="mt-6" />
      <View className="flex-row items-center justify-between mt-4">
        <Text className="text-sm text-gray-500 font-rregular">
          App version 5.03
        </Text>
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => router.push("/sign-in")}
          activeOpacity={0.3}
        >
          <Ionicons name="log-out-outline" size={30} color="#154C79" />
          <Text className="text-base text-black ml-2 font-rregular">
            Log out
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
=======
      <Text className="text-lg font-bold mb-2">My Account</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} className="flex-row items-center justify-between py-3 border-b border-gray-200" onPress={() => navigation.navigate(item.route)}>
          <View className="flex-row items-center">
          <Ionicons name={item.icon} size={20} className="mr-3" color="#154C79" />
          <Text className="text-base">{item.title}</Text>
          </View>  
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>
      ))}
      <View className="mt-6" />
      <Text className="text-lg font-bold mt-4 mb-2">App Settings</Text>
      {settingsItems.map((item, index) => (
        <TouchableOpacity key={index}  className="flex-row items-center justify-between py-3 bg-gray-50 border-b border-gray-300 rounded-lg px-3"  onPress={() => navigation.navigate(item.route)}>
          <View className="flex-row items-center">
          <Ionicons name={item.icon} size={20} className="mr-3" color="#154C79" />
          <Text className="text-base">{item.title}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="gray" />
        </TouchableOpacity>
      ))}
<View className="mt-6" />
<View className="flex-row items-center justify-between mt-4">
  <Text className="text-sm text-gray-500">App version 5.03</Text>
  <TouchableOpacity className="flex-row items-center" onPress={() => router.push('/sign-in')}>
    <Ionicons name="log-out-outline" size={20} color="#154C79" />
    <Text className="text-base text-black ml-2">Log out</Text>
  </TouchableOpacity>
</View>


>>>>>>> 1e2898e521740cf7c0f63ab2606110cc1e3ede28
    </ScrollView>
  );
};

<<<<<<< HEAD
export default more;
=======
export default more;
>>>>>>> 1e2898e521740cf7c0f63ab2606110cc1e3ede28
