import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import {styles} from './styles';
import Geolocation from 'react-native-geolocation-service';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export function Maps () {
    const [location, setLocation] = useState(null);

    const handleLocationPermission = async () => {
      let permissionCheck = '';

      if (Platform.OS === 'android') {
        permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  
        if (permissionCheck === RESULTS.DENIED) {
          const permissionRequest = await request(
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          );
          permissionRequest === RESULTS.GRANTED
            ? console.warn('Location permission granted.')
            : console.warn('Location perrmission denied.');
        }
      }
    };
  
    useEffect(() => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }, []);
  
    useEffect(() => {
      handleLocationPermission();
    }, []);
  
    return (
        <View style={{flex:1}}> 
         {location && (
<MapView
          mapPadding={{top: 750, right: 20}}
          followsUserLocation={true}
          paddingAdjustmentBehavior="automatic"
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsBuildings={true}
          maxZoomLevel={17.5}
          loadingEnabled={true}
          loadingIndicatorColor="#fff"
          loadingBackgroundColor="#242f3e"
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        )}
        </View>
    )
}