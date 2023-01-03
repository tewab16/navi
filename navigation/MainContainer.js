import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';



// Screens
import HomeScreen from './screens/HomeScreen';
import  DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const home = "student screen";
const contact = "teacher screen";
const About = "employee screen";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === contact) {
              iconName = focused ? 'globe-outline' : 'globe-outline';

            } else if (rn === About) {
              iconName = focused ? 'journal' : 'journal';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ad1f6d',
          inactiveTintColor: '#1f91ad',
          labelStyle: { paddingBottom: 5, fontSize: 15 },
          style: { padding: 20, height: 80}
        }}>

        <Tab.Screen name={home} component={DetailsScreen} />
        <Tab.Screen name={contact} component={HomeScreen} />
        <Tab.Screen name={About} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  nav: {
    backgroundColor:'brown'
  },
})
export default MainContainer;