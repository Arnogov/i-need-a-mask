import React, {Component} from 'react';
import {ScrollView, Text, TextInput, Button, View} from 'react-native';


class AddScreen extends Component {
    render() {
        return (
            <ScrollView style={{ padding: 25}}>
                <Text style={{color: 'black', fontSize: 50, textAlign: 'center', marginBottom: 40}}>
                    Ajouter une pharmacie
                </Text>

                <Text style={{fontSize: 30, marginBottom: 10}}>Nom</Text>
                <TextInput style={{height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40}}
                           name="Nom"
                           Type='TextInput' returnKeyType='done'
                />

                <Text style={{fontSize: 30, marginBottom: 10}}>Adresse</Text>
                <TextInput style={{height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40}}
                           name="Adresse"
                           Type='TextInput' returnKeyType='done'
                />

                <Text style={{fontSize: 30, marginBottom: 10}}>Latitude</Text>
                <TextInput style={{height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40}}
                           name="Latitude"
                           Type='TextInput' returnKeyType='done'
                />

                <Text style={{fontSize: 30, marginBottom: 10}}>Longitude</Text>
                <TextInput style={{height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 40}}
                           name="Longitude"
                           Type='TextInput' returnKeyType='done'
                />

                <View style={{marginBottom: 400}}>
                <Button title='Enregistrer' onPress={() => this.onSubmit()}/>
                </View>
            </ScrollView>
        );
    }
}

export default AddScreen;