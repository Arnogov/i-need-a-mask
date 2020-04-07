import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from "./screens/SearchScreen";
import AddScreen from "./screens/AddScreen";
import DetailScreen from "./screens/DetailScreen";
import {Ionicons} from '@expo/vector-icons';


const store = createStore(reducers, applyMiddleware(thunk));
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Search() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchDetail" component={DetailScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    const HomeScreenOptions = {

    };
    const SearchScreenOptions = {};
    const AddScreenOptions = {};

    return (
        <Provider store={pharmacy}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'md-home';
                        } else if (route.name === 'Search') {
                            iconName = 'md-search';
                        } else if (route.name === 'Add') {
                            iconName = 'md-add-circle';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                               tabBarOptions={{
                                   activeTintColor: 'black',
                                   inactiveTintColor: 'grey',
                               }}>
                    <Tab.Screen name="Home" options={HomeScreenOptions} component={HomeScreen}/>
                    <Tab.Screen name="Search" options={SearchScreenOptions}component={SearchScreen}/>
                    <Tab.Screen name="Add" options={AddScreenOptions}component={AddScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
