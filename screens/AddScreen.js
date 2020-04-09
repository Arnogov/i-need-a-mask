import React, {Component} from 'react';
import {ScrollView, Text, TextInput, Button, View} from 'react-native';
import PharmacyFormContainer from "../containers/PharmacyFormContainer";

class AddScreen extends Component {

    render() {
        return (
            <ScrollView style={{padding: 25}}>
                <Text style={{color: 'black', fontSize: 25, textAlign: 'center', marginBottom: 40}}>
                    Ajouter une pharmacie
                </Text>
                <View style={{borderColor: 'black', fontSize: 15, marginBottom: 10}}>
                    <PharmacyFormContainer/>
                </View>
            </ScrollView>
        );
    }
}

export default AddScreen;