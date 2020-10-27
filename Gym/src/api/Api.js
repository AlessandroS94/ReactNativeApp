import axios from 'axios';
import firebase, {firestore} from '../firebase/firebase';

const URL_VIDEO = 'https://www.googleapis.com/youtube/v3/playlistItems?part=id%2Csnippet&maxResults=10&playlistId=PLA21FAE7C8EE25330&key=AIzaSyAYVriqGxTsWgVFx7YG6czyMAOtp7IrUzI';

export const getVideos = function () {
    return axios.get(URL_VIDEO).
    then(response => response.data.items).
    catch(error => {
        throw error;
    });
};

export  const getExercises = function () {
    const db = firestore;
    const groupArray = [];
    const userID = firebase.auth().currentUser.uid;

    /*db.collection('exercise_' + userID).onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type == 'added') {

                groupArray.push(change.doc.data());
            }
            if (change.type === 'modified') {
                console.log('Modified Group: ', change.doc.data());
            }
            if (change.type === 'removed') {
                console.log('Removed Group', change.doc.data());
            }
        });
        console.log(groupArray);
    return groupArray;
    });*/

    db.collection('exercise_' + userID)
        .doc()
        .get()
        .then(function(querySnapshot) {
            if (querySnapshot){
                console.log(querySnapshot.data());
            }
            else console.log('not exist');

        })
        .catch(function(error) {
            console.log('Error getting documents: ', error);
        });


}
