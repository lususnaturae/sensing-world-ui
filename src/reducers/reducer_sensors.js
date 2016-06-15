/**
 * Created by marco on 10.6.2016.
 */
import { FETCH_SENSORS } from '../actions/index';

const INITIAL_STATE = { sensors: [], activeSensor: null };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SENSORS:
            // do not push to state, but add with concat
            // ES6 style way below
            console.log("FETCH_SENSORS case");
            return [ action.payload.data, ...state];
            // this is same
            //return state.concat([action.payload.data]);

             
    }
    return state;
}