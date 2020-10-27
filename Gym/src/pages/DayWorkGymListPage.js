import React, {useEffect, useState} from 'react';
import firebase, {firestore} from '../firebase/firebase';
import {View, Text, ActivityIndicator, ScrollView, FlatList} from 'react-native';

import ExerciseItem from './partial/ExerciseItem';

export default function (navigation) {
    const [messageList, setMessageList] = useState([]);
    const userID = firebase.auth().currentUser.uid;
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        getExercises();
    }, []);

    function getExercises() {
        const db = firestore;
        let messages = [];

        db.collection('exercise_' + userID).onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
                if (change.type == 'added') {
                    messages.push(change.doc.data());
                }
                if (change.type === 'modified') {
                    setLoading(
                        true
                    );
                    messages.push(change.doc.data());
                }
                if (change.type === 'removed') {
                    setLoading(
                        true
                    );
                    messages = null;
                    messages.push(change.doc.data());
                }

            });

            setMessageList(messages);
            setLoading(
                false
            );
        });
    }

    if (loading) {
        return (
            <View
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={'large'} color={'red'} />
            </View>
        );
    }


    return (
        <View style={styles.container}>
                <FlatList
                    style={{paddingTop: 10, flex: 1}}
                    data={messageList}
                    ListEmptyComponent={() => <Text style={styles.noElementText}>Nessun elemento</Text>}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({item}) => (
                        <ExerciseItem exercise={item}>

                        </ExerciseItem>
                    )}
                />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        paddingVertical: 15,
    },
};
