import firebase, {firestore} from '../firebase/firebase';
import {
    EXERCISE_FORM_CHANGE_VALUE,
    EXERCISE_FORM_RESET
} from '../stores/ActionType';
import {sExerciseTitle, sExerciseDescription,sExerciseDate} from '../reducers/selectors';


export const appExerciseChangeTitle = function (value) {
    return {
        type: EXERCISE_FORM_CHANGE_VALUE,
        payload: {
            field: 'title',
            value,
        },
    };
};

export const appExerciseFormChangeDescription = function (value) {
    return {
        type: EXERCISE_FORM_CHANGE_VALUE,
        payload: {
            field: 'description',
            value,
        },
    };
};

export const appExerciseFormChangeDate = function (value) {

    return {
        type: EXERCISE_FORM_CHANGE_VALUE,
        payload: {
            field: 'date',
            value,
        },
    };
};

export const appExerciseFormReset = function () {
    return {
        type: EXERCISE_FORM_RESET,
    };
};

export const appExerciseFormSet = function () {
    //check stringa vuota
    return (dispatch, getState) => {
        const storeState = getState();
        const title = sExerciseTitle(storeState);
        const description = sExerciseDescription(storeState);
        const date = sExerciseDate(storeState);
        const userID = firebase.auth().currentUser.uid;
        const exerciseRef = firestore.collection('exercise_' + userID).doc();

        exerciseRef
            .set({
                title: title,
                description: description,
                date:date,
            })
            .then(function(docRef) {
                alert('Esercizio Inserito');
                dispatch(appExerciseFormReset());
            })
            .catch(function(error) {
                Alert.alert(error.message);
            });
    };
};
