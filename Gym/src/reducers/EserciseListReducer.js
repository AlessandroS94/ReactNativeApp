import {
    EXERCISE_FETCH,
    VIDEO_FETCH_FAIL,
    VIDEO_FETCH_SUCCESS,
} from '../stores/ActionType';

const sExerciseList = (state) => state.exerciseList;
export const sLoadedExercisesList = state => sExerciseList(state).exercises;
export const sExercisesListLoading = state => sExerciseList(state).loading;

const INITIAL_STATE = {
    exercises: null,
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${EXERCISE_FETCH}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${EXERCISE_FETCH}_REJECTED`:
            return {
                ...state,
                loading: false,
            };
        case `${EXERCISE_FETCH}_FULFILLED`:
            return {
                ...state,
                exercises: action.payload.exercises,
                loading: false,
            };
        default:
            return state;
    }
}
