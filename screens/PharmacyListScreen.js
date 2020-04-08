import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import PharmacyListContainer from "../containers/PharmacyListContainer";

class PharmacyListScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={{ color: 'black', fontSize: 30, textAlign: 'center'}}>Rechercher les pharmacies</Text>

                <PharmacyListContainer navigate={navigate}/>
            </View>
        );
    }
}

export default PharmacyListScreen;