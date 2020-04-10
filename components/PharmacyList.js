import React, {Component} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {ThemeProvider,Button} from 'react-native-elements';

const theme = {
        Button: {
        titleStyle: {
            color: 'black',
        },
    },
};


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
                            <ThemeProvider theme={theme}>
                            <Button
                                buttonStyle={{
                                    backgroundColor:'lightblue'}}
                                icon={{name: 'local-pharmacy'}}
                                title={item.name}
                                onPress={() =>
                                    this.props.navigate('PharmacyScreen', {pharmacy: item})
                                }>
                            </Button>
                            </ThemeProvider>}
                        keyExtractor={item => item._id}
                    />
                </View>
            </View>
        );
    }
}

export default PharmacyList;