import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image
} from 'react-native';

export default class FormLogo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 150, height: 100 }}
                    source={require('../img/REDU.png')} />
                <Text style={styles.logoText}>Saatnya berekreasi yang bernilai edukasi</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30
    },
    logoText: {
        marginVertical: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#015249'
    }
});