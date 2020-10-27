import firebase from 'firebase';
import {
  GUEST_FORM_CHANGE_VALUE,
  GUEST_FORM_RESET,
} from '../stores/ActionType';
import {sAppGuestFormEmail, sAppGuestFormPassword} from '../reducers/selectors';

export const appGuestFormChangeEmail = function (value) {
    return {
        type: GUEST_FORM_CHANGE_VALUE,
        payload: {
            field: 'email',
            value,
        },
    };
};

export const appGuestFormChangePassword = function (value) {
    return {
        type: GUEST_FORM_CHANGE_VALUE,
        payload: {
            field: 'password',
            value,
        },
    };
};

export const appGuestFormReset = function () {
    return {
        type: GUEST_FORM_RESET,
    };
};

export const appFirebaseSignIn = function () {
    return (dispatch, getState) => {
        const storeState = getState();
        const email = sAppGuestFormEmail(storeState);
        const password = sAppGuestFormPassword(storeState);
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            dispatch(appGuestFormReset());
        }).catch((error) => {
            // Handle Errors here
            alert(error.message);
        });

    };
};
