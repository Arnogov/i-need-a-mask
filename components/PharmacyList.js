import React, {Component} from 'react';
import {View, ActivityIndicator, FlatList, Button} from 'react-native';



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

                <View style={{marginTop: 50, marginBottom: 50}}>
                    <FlatList
                        vertical
                        ItemSeparatorComponent={() => <View style={{width: 10, height: 10}}/>}
                        data={pharmacies}
                        renderItem={({item}) =>
                            <Button
                                color='lightblue'
                                title={item.name}
                                onPress={() =>
                                    this.props.navigate('PharmacyScreen', {pharmacy: item})
                                }>
                            </Button>}
                        keyExtractor={item => item._id}
                    />
                </View>
            </View>
        );
    }
}

export default PharmacyList;