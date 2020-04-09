import React, {Component} from 'react';
import {View, TextInput, Text, TouchableOpacity, ActivityIndicator, FlatList, Button} from 'react-native';

class PharmacyList extends Component {



    render() {
        const {
            pharmacies,
            loading,
        } = this.props;

        if (loading) {
            return (<ActivityIndicator size='large'/>);
        }

        return (
            <View style={{marginTop: 50, marginBottom: 50}}>

                <Button title='Rechercher' onPress={() => this.props.fetchPharmacies()}/>
                <FlatList data={pharmacies}
                          renderItem={({item}) =>
                              <Button
                                  title={item.name}
                                  onPress={() =>
                                      this.props.navigate('PharmacyScreen', {pharmacy:item})
                                  }>
                              </Button>}
                          keyExtractor={item => item._id}
                />
            </View>
        );
    }
}

export default PharmacyList;