import React, {Component} from 'react';
import {View} from "react-native";
import PharmacyItemContainer from "../containers/PharmacyItemContainer";

class PharmacyScreen extends Component {
    render() {
        const {pharmacy} = this.props.route.params;
        return (
            <View style={{marginTop: 50}}>
                <PharmacyItemContainer pharmacy={pharmacy}/>
            </View>
        );
    }
}

export default PharmacyScreen;