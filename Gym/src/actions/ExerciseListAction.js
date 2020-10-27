import {
    EXERCISE_FETCH,
    EXERCISE_FETCH_FAIL,
    EXERCISE_FETCH_SUCCESS
} from '../stores/ActionType';
import * as API from '../api/Api'


export function exerciseFetched(exercises) {
    return {
        type: EXERCISE_FETCH_SUCCESS,
        payload: {
            exercises
        }
    }
}
export function exerciseFetchOLD() {
    return function (dispatch) {
        dispatch({type: EXERCISE_FETCH});
        API.getExercises().
        then(exercises => dispatch(exerciseFetched(exercises))).
        catch(err => dispatch({type: EXERCISE_FETCH_FAIL}));
    }
}

export function exerciseFetch() {
    return {
        type: EXERCISE_FETCH,
        payload: {exercises: API.getExercises()}
    };
}
