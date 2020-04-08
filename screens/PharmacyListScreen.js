import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import PharmacyListContainer from "../containers/PharmacyListContainer";

class PharmacyListScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <PharmacyListContainer navigate={navigate}/>
            </View>
        );
    }
}

export default PharmacyListScreen;