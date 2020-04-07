import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import PharmacyListContainer from "../containers/PharmacyListContainer";


class SearchScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 150}}>

                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Button
                    title='Rechercher'
                    onPress={() =>
                        navigation.navigate('')}
                />
                <PharmacyListContainer/>

            </View>

        );
    }
}


export default SearchScreen;
