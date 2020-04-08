import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PharmacyListScreen from "./PharmacyListScreen";
import PharmacyScreen from "./PharmacyScreen";



const Stack = createStackNavigator();

class SearchScreen extends Component {
    render() {

        return (

            <Stack.Navigator>
                <Stack.Screen name='PharmacyListScreen' component={PharmacyListScreen}/>
                <Stack.Screen name='PharmacyScreen' component={PharmacyScreen}/>
            </Stack.Navigator>


        );
    }
}

export default SearchScreen;
