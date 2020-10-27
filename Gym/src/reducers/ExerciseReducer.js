import {
    EXERCISE_FORM_CHANGE_VALUE, EXERCISE_FORM_RESET,
    IN_LOADING,
    LOADING_END
} from '../stores/ActionType';

const sExercise = (state) => state.exercise;
const sExerciseForm = (state) => sExercise(state).exerciseForm;
export const sExerciseTitle = (state) => sExerciseForm(state).title;
export const sExerciseDescription = (state) => sExerciseForm(state).description;
export const sExerciseDate = (state) => sExerciseForm(state).date;



const INITIAL_STATE = {
    loading: false,
    loadingSeconds: 0,
    exerciseForm: {
        title: '',
        description: '',
        date:''
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

        case EXERCISE_FORM_CHANGE_VALUE:
            return {
                ...state,
                exerciseForm: {
                    ...state.exerciseForm,
                    [action.payload.field]: action.payload.value
                }
            };
        case EXERCISE_FORM_RESET:
            return {
                ...state,
                exerciseForm: {
                    ...INITIAL_STATE.exerciseForm
                },
                loading: false
            };
        default:
            return state;
    }
}
