import {combineReducers} from 'redux';

import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import WeightReducer from './WeightReducer';
import VideoReducer from './VideoReducer';
import ExerciseReducer from './ExerciseReducer';
import ExerciseListReducer from './EserciseListReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    user: UserReducer,
    weight:WeightReducer,
    video:VideoReducer,
    exercise: ExerciseReducer,
    exerciseList:ExerciseListReducer
});

export default rootReducer;
