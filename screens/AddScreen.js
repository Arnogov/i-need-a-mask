import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import PharmacyFormContainer from "../containers/PharmacyFormContainer";

class AddScreen extends Component {

    render() {
        return (

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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