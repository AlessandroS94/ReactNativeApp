import {combineReducers} from 'redux';

import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import WeightReducer from './WeightReducer';
import VideoReducer from './VideoReducer';
import ExerciseReducer from './ExerciseReducer';


const rootReducer = combineReducers({
    app: AppReducer,
    user: UserReducer,
    weight:WeightReducer,
    video:VideoReducer,
    exercise: ExerciseReducer,

});

export default rootReducer;
