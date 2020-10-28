import React, {useEffect, useState} from 'react';
import firebase, {firestore} from '../firebase/firebase';
import {View, Text, ActivityIndicator, ScrollView, FlatList} from 'react-native';
import ExerciseItem from './partial/ExerciseItem';

export default function (navigation) {
    const [messageList, setMessageList] = useState([]);
    const userID = firebase.auth().currentUser.uid;
    const [loading, setLoading] = useState([true]);
    const db = firestore;
    const messages = [];
    useEffect(() => {
        getExercises();
    }, []);

    function getExercises() {
        db
            .collection('exercise')
            .where('userID', '==', userID)
            .onSnapshot(function (snapshot) {
                snapshot
                    .docChanges()
                    .forEach(function (change) {
                        if (change.type === 'added') {
                            setLoading(true);
                            messages.push(change.doc);
                        }
                        if (change.type === 'modified') {
                            setLoading(true);
                            messages.push(change.doc);
                        }
                        if (change.type === 'removed') {
                            setLoading(true);
                            messages.pop(change.doc);
                        }
                    });
                setMessageList(messages);
                setLoading(
                    false,
                );
            });
    }

    function deleteExercises(item) {
        db.collection('exercise').doc(item.id).delete().then(getExercises);
    }

    if (loading) {
        return (
            <View
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={'large'} color={'red'}/>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{paddingTop: 10, flex: 1}}
                data={messageList}
                ListEmptyComponent={() => <Text style={styles.noElementText}> Nessun elemento </Text>}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) =>(
                        <ExerciseItem exercise={item.data()} user={userID} onPress={() => deleteExercises(item)}>
                        </ExerciseItem>)}
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        paddingVertical: 15,
    },
    noElementText: {
        textAlign: 'center',
        fontSize: 14,
    },
};
