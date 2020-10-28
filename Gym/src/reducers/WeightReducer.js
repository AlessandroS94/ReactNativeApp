import {WEIGHT_ADD,WEIGHT_TEXT_CHANGE,WEIGHT_DELETE} from '../stores/ActionType';

const sWeight = state => state.weight;
export const sWeightList = state => sWeight(state).weights;
export const sWeightText = state => sWeight(state).form.newTaskText;


const INITIAL_STATE = {
    weights: [],
    form: {
        newTaskText: '',
    },
};


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case WEIGHT_TEXT_CHANGE:
            return {
                ...state,
                form: {
                    newTaskText: action.payload.value,
                },
            };
        case WEIGHT_ADD:
            return {
                ...state,
                form: {
                    newTaskText:'',
                },
                weights: [
                    ...state.weights,
                    action.payload.weight,
                ],
            };
        case WEIGHT_DELETE:
            return {
                ...state,
                weights: [
                    ...(state.weights.filter(
                        (weight) => {weight.id !== action.payload.weight.id;})),
                ],
            };
        default:
            return state;
    }
}
