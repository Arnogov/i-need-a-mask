import React, {Component} from 'react';
import {ScrollView, Text, TextInput, Button, View} from 'react-native';
import PharmacyFormContainer from "../containers/PharmacyFormContainer";

class AddScreen extends Component {

    render() {
        return (
            <ScrollView>
                <View style={{padding: 20}}>
                    <Text style={{color: 'black', fontSize: 50, textAlign: 'center', marginBottom: 20}}>
                        Ajouter une pharmacie
                    </Text>
                    <View style={{height: 40, marginBottom: 20}}>
                        <PharmacyFormContainer/>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

export default AddScreen;