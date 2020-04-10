import React, {Component} from 'react';
import {TextInput, Button, Text, View} from 'react-native';

class PharmacyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', address: '', latitude: '', longitude: '', mask: ''};
    }

    onSubmit() {

        this.props.addPharmacy({

            name: this.state.name,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            mask: this.state.mask,
        });
        this.setState({name: '', address: '', latitude: '', longitude: '', mask: ''});
    }

    render() {
        return (
            <View style={{flexGrow: 1}}>
                <Text style={{marginBottom: 10, fontSize: 20}}>Nom</Text>
                <TextInput value={this.state.name} onChangeText={text => this.setState({name: text})}
                           style={{
                               height: 40,
                               borderColor: 'black',
                               borderWidth: 1,
                               justifyContent: 'center',
                               marginBottom: 20
                           }}/>
                <Text style={{marginBottom: 10, fontSize: 20}}>Adresse</Text>
                <TextInput value={this.state.address} onChangeText={text => this.setState({address: text})}
                           style={{
                               height: 40,
                               borderColor: 'black',
                               borderWidth: 1,
                               justifyContent: 'center',
                               marginBottom: 20
                           }}/>
                <Text style={{marginBottom: 10, fontSize: 20}}>Latitude</Text>
                <TextInput value={this.state.latitude} onChangeText={text => this.setState({latitude: text})}
                           style={{
                               height: 40,
                               borderColor: 'black',
                               borderWidth: 1,
                               justifyContent: 'center',
                               marginBottom: 20
                           }}/>
                <Text style={{marginBottom: 10, fontSize: 20}}>Longitude</Text>
                <TextInput value={this.state.longitude} onChangeText={text => this.setState({longitude: text})}
                           style={{
                               height: 40,
                               borderColor: 'black',
                               borderWidth: 1,
                               justifyContent: 'center',
                               marginBottom: 20
                           }}/>
                <Text style={{marginBottom: 10, fontSize: 20}}>Masques disponibles</Text>
                <TextInput value={this.state.mask} onChangeText={text => this.setState({mask: text})}
                           style={{
                               height: 40,
                               borderColor: 'black',
                               borderWidth: 1,
                               justifyContent: 'center',
                               marginBottom: 20
                           }}/>
                <Button title='Enregistrer' onPress={() => this.onSubmit()}/>

            </View>

        );
    }
}

export default PharmacyForm;
