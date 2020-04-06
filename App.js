import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import AddScreen from "./screens/AddScreen";
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'md-home';
                    } else if (route.name === 'Location') {
                        iconName = 'md-search';
                    }else if (route.name === 'Add') {
                        iconName = 'md-add-circle';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={30} color={color}/>;
                },
            })}
                           tabBarOptions={{
                               activeTintColor: 'black',
                               inactiveTintColor: 'grey',
                           }}>
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen name='Location' component={SearchScreen}/>
                <Tab.Screen name='Add' component={AddScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
