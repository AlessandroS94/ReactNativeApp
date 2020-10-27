import {WEIGHT_ADD, WEIGHT_DELETE, WEIGHT_TEXT_CHANGE} from '../stores/ActionType';
import {sWeightText} from '../reducers/WeightReducer';

var nextId = 0;

export function WeightTextChange(value) {
    return {
        type: WEIGHT_TEXT_CHANGE,
        payload: {
            value,
        },
    };
}

export function WeightAdd() {
    return function(dispatch, getState) {
        const currentState = getState();

        const weight = {
            id: nextId++,
            text: sWeightText(currentState),
        };
        dispatch({
            type: WEIGHT_ADD,
            payload: {
                weight,
            },
        });
    };
}

export function WeightRemove(weight) {
    console.log(weight.id);
    return {
        type: WEIGHT_DELETE,
        payload: {
            weight,
        },
    };
}
