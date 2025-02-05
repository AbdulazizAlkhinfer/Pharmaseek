import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import pharmacyData from '../../constants/Pharmacy_dataSet2.json';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';
import { haversineDistance, cleanStreetName, getPharmacyName, isPharmacyOpen, getPharmacyRating } from '../../constants/dataPulling';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from "../../components/CustomButton";
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const requestLocationPermission = async () => {
    setErrorMsg(null);
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      setErrorMsg('We’re having trouble detecting your location');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (!location) return;

    const processedData = pharmacyData.map((pharmacy, index) => {
      const distance = pharmacy.latitude && pharmacy.longitude 
        ? haversineDistance(
            location.lat,
            location.lng,
            pharmacy.latitude,
            pharmacy.longitude
          ).toFixed(2)
        : 'N/A';

      return {
        id: index.toString(),
        name: getPharmacyName(pharmacy.name),
        street: cleanStreetName(pharmacy.street),
        city: pharmacy.city || 'Unknown City',
        rating: getPharmacyRating(pharmacy.rating),
        logo: pharmacy.logo,
        status: isPharmacyOpen(pharmacy.working_hours),
        distance: distance
      };
    });

    const sortedData = processedData.sort((a, b) => a.distance - b.distance);
    setPharmacies(sortedData);
  }, [location]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white">
  {/* Left: Location */}
<View className="flex-1">
  <TouchableOpacity className="flex-row items-center">
    {/* Left Arrow Icon */}
    <Ionicons name="chevron-down" size={18} color="gold" />

    {/* Gold Text */}
    <Text className="text-yellow-500 font-bold text-sm ml-1">Usiqhyer, Shaq..</Text>

  </TouchableOpacity>
</View>


  {/* Center: Pharmaseek */}
  <View className="absolute left-1/2">
    <Text className="text-xl font-bold -translate-x-1/2">       Pharmaseek</Text>
  </View>

  {/* Right: Notification Icon */}
  <View className="flex-1 items-end ">
  <View className="bg-gray-200 p-2">
  <Ionicons name="notifications-outline" size={24} color="black" />
</View>

  </View>
</View>




      {/* Search Bar */}
      <View className="px-4 mt-2">
        <TextInput
          placeholder="What are you looking for?"
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </View>

      {/* Browse Section */}
      <View className="bg-gray-200 rounded-lg mx-4 mt-4 flex-row items-center" style={{ width: 365, height: 150 }}>
  <View className="flex-1 p-4">
    <Text className="text-gray-900 font-bold text-base mt-1">Browse from Nearest Pharmacies</Text>
    <Text className="text-gray-600 text-sm pb-3">
      Medicines, personal care products, baby supplies
    </Text>

    <TouchableOpacity className="bg-primary mt-2 py-2 px-4 rounded-md w-36">
      <Text className="text-white text-center">Browse Now</Text>
    </TouchableOpacity>
  </View>

  <Image
    source={images.defaultPharmacyPhoto}
    resizeMode="contain"
    style={{ width: 200, height: 400, marginLeft: -100 ,marginRight: -30 }}
  />
</View>


<View className="mt-6" />

<View className="flex-row justify-between items-center px-4">
  <Text className="text-[17px] font-semibold">Pharmacy</Text>


  <TouchableOpacity className="p-2 ">
    <Ionicons name="options-outline" size={24} color="black" />
  </TouchableOpacity>
</View>


{/* Pharmacy List */}
<FlatList
  data={pharmacies}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View className="p-3 m-3 rounded-lg shadow-sm bg-white">
      {/* Rating on the top right */}
      <Text className="absolute top-2 right-2 text-gray-700 font-bold">
        ⭐ {item.rating}
      </Text>

      {/* Row: Logo & Details */}
      <View className="flex-row items-center">
        {/* Pharmacy Logo */}
        <Image 
          source={item.logo ? { uri: item.logo } : images.defaultPharmacyPhoto} 
          className="w-16 h-16 rounded-md"
        />

        {/* Pharmacy Info */}
        <View className="ml-4 flex-1">
          <Text className="text-base font-bold" >{item.name}</Text>
          <Text className="text-gray-600">{item.street}, {item.city}</Text>
          <View className="mt-4" />

          {/* Distance with Pin Icon & Status */}
          <View className="flex-row items-center mt-1">
            <FontAwesome name="map-marker" size={16} color="gray" />
            <Text className="text-gray-500 ml-1">{item.distance} KM   |</Text>

            <Text className={item.status === 'Opened' ? 'text-green-500 ml-2' : 'text-red-500 ml-2'}>
              {item.status}
            </Text>
          </View>
          <View className="mt-2" />
        </View>
      </View>
    </View>
  )}
/>
  


 


      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Home;
