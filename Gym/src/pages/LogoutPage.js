import React, {Component, useEffect} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import firebase from 'firebase';
import {Card, CardItem, LoginButton} from '../components';


export default function ({navigation}) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Card>
                    <Text style={styles.text}> Sei sicuro di voler uscire ?</Text>
                </Card>
                <Card>
                    <CardItem>
                        <LoginButton onPress={() => {
                            firebase.auth().signOut();
                        }} text={'logout'}/>
                    </CardItem>
                </Card>
            </ScrollView>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        paddingVertical: 15,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
};
