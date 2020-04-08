import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

class PharmacyItem extends Component {

    render() {
        const {pharmacy} = this.props;
        return (
            <View style={{alignItems: 'center'}}>
                <Image
                    source={require('../assets/logo.jpg')} style={{width: 100, height: 100, marginBottom: 20}}
                />
                <Text style={{fontSize: 20, marginBottom: 20}}>
                    Bienvenue à la pharmacie {pharmacy.name}
                </Text>
                <Text style={{fontSize: 15, marginBottom: 20}}>
                    Adresse: {pharmacy.address}
                </Text>
                <Text style={{fontSize: 15, marginBottom: 20}}>
                    Masques disponibles: {pharmacy.mask}
                </Text>

            </View>
        );
    }
}

export default PharmacyItem;