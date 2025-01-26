import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-9 h-9 mt-9"
      />
      <Text 
        className={`${focused ? 'font-rsemibold' : 'font-rregular'} text-sm text-center`}
        style={{ color: color, width: 100 }}
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  )
}

const tabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{ 
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#09B683',
          tabBarInactiveTintColor: '#7D7D7D',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 8.00,
            height: 85,
          }
        }}
      >
        <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color} 
                name="Home" 
                focused={focused} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name="watchlist"
          options={{
            title: 'Watchlist',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.heart}
                color={color} 
                name="Watchlist" 
                focused={focused} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name="map"
          options={{
            title: 'Map',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.pin}
                color={color} 
                name="Map" 
                focused={focused} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name="reminders"
          options={{
            title: 'Reminders',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.calendar}
                color={color} 
                name="Reminders"
                focused={focused} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name="more"
          options={{
            title: 'More',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.more}
                color={color} 
                name="More" 
                focused={focused} 
              />
            )
          }} 
        />
        
      </Tabs>
    </>
  )
}

export default tabsLayout