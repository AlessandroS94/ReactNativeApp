import {
  GUEST_FORM_CHANGE_VALUE, GUEST_FORM_RESET,
  IN_LOADING,
  LOADING_END,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from '../stores/ActionType';

const sApp = (state) => state.app;
const sAppGuestForm = (state) => sApp(state).guestForm;
export const sAppGuestFormEmail = (state) => sAppGuestForm(state).email;
export const sAppGuestFormPassword = (state) => sAppGuestForm(state).password;
export const sAppLogged = (state) => sApp(state).logged;


const INITIAL_STATE = {
  loading: true,
  logged: false,
  loadingSeconds: 0,
  guestForm: {
    email: '',
    password: ''
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case IN_LOADING:
      return {
        ...state,
        loadingSeconds: state.loadingSeconds + 1
      };
    case LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case USER_LOGGED_IN:
      return {
        ...state,
        logged: true,
        loading: false,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        logged: false,
        loading: false,
      };
    case GUEST_FORM_CHANGE_VALUE:
      return {
        ...state,
        guestForm: {
          ...state.guestForm,
          [action.payload.field]: action.payload.value
        }
      };
    case GUEST_FORM_RESET:
      return {
        ...state,
        guestForm: {
          ...INITIAL_STATE.guestForm
        },
        loading: false
      };
    default:
      return state;
  }
}
