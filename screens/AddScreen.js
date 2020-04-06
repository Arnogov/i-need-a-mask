import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';



class AddScreen extends Component {
    render() {
        return (
            <View style = {{ padding:20 }}>
                <Text style = {{ color: 'black', fontSize: 50, textAlign: 'center' }}>
                    Ajouter une pharmacie
                </Text>

                <Text>Nom</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1}}
                            name="Nom"
                            Type='TextInput' returnKeyType='done'
                            />

                <Text>Adresse</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1}}
                            name="Adresse"
                            Type='TextInput' returnKeyType='done'
                            />

                <Text>Latitude</Text>
                <TextInput  style={{ height:40, borderColor:'gray', borderWidth: 1}}
                            name="Latitude"
                            Type='TextInput' returnKeyType='done'
                            />

                <Text>Longitude</Text>
                <TextInput  style={{ height:40, borderColor:'gray', borderWidth: 1}}
                            name="Longitude"
                            Type='TextInput' returnKeyType='done'
                            />


                <Button title='Enregistrer' onPress={() => this.onSubmit()}
                        style={{ paddingTop: 10 }}/>




            </View>

        );
    }
}


export default AddScreen;