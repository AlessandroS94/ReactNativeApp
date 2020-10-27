import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../stores/ActionType'

const INITIAL_STATE = {
    user: null,
};
//
// action = {
//   type: 'USER_LOGGED_IN',
//   payload: {
//     user: {
//       name: 'mario',
//       surname: 'rossi',
//       email: 'a@a.it',
//     },
//   }
// };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                user: action.payload.user
            };
        case USER_LOGGED_OUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}
