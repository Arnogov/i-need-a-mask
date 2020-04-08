import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PharmacyListScreen from "./PharmacyListScreen";
import PharmacyScreen from "./PharmacyScreen";


const Stack = createStackNavigator();

class SearchScreen extends Component {
    render() {

        return (

            <Stack.Navigator>
                <Stack.Screen name='Rechercher' component={PharmacyListScreen}/>
                <Stack.Screen name='PharmacyScreen' options={{title:'Pharmacie'}} component={PharmacyScreen}/>
            </Stack.Navigator>


        );
    }
}

export default SearchScreen;
