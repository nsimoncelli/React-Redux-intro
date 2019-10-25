import {combineReducers} from 'redux';

import clockReducer from './clock_reducer';

const rootReducer = combineReducers({
    clock: clockReducer

});


export default rootReducer;


state={
    clock:{
        time: 'the time'
    }
}