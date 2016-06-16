/**
 * Created by marco on 10.6.2016.
 */
import { FETCH_SENSOR } from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_SENSOR:
            // do not push to state, but add with concat
            // ES6 style way below
            return [ action.payload.data, ...state];
            // this is same
            //return state.concat([action.payload.data]);

             
    }
    return state;
}