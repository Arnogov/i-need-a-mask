import React, {Component} from 'react';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AddScreen from "../screens/AddScreen";
import {Button, View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function MyStack() {
      return (
        <View style={{margin: 15, padding: 20, display: "flex"}}>

            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Add" component={AddScreen}/>
            </Stack.Navigator>


            <Button title='Rechercher' onPress={() => this.onSubmit()}
                    style={{marginTop: 70, flex: 1, paddingTop: 10}}/>

        </View>
    )
}

export default SearchScreen;
