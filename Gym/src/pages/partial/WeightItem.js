import * as React from 'react';
import {Image,View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

export default function({weight, onPress}) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{weight.text}</Text>
            </View>
            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={onPress}>
                    <Image style={styles.trashIcon} source={require('../../asset/trash.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {},
    text: {
        fontSize: 16,
    },
    actionContainer: {
        width:50,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        height: 45,
        justifyContent: 'center',
        paddingHorizontal: 12.5,
    },
    actionButtonIcon: {
        height: 20,
        width: 20,
        backgroundColor: 'red',
    },
    trashIcon:{
        height:25,
        width: 25,
        justifyContent: 'center',
    }
});

