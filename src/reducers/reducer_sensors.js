/**
 * Created by marco on 10.6.2016.
 */
import { FETCH_SENSORS } from '../actions/index';

const INITIAL_STATE = { sensors: [], selectSensor: null };

export default function(state = INITIAL_STATE, action) {
    console.log("reducer_sensors");
    console.log(action);

    switch (action.type) {
        case FETCH_SENSORS:
            // do not push to state, but add with concat
            // ES6 style way below
            console.log("FETCH_SENSORS case");


            return { ...state, sensors: action.payload.data};
            // this is same
            //return state.concat([action.payload.data]);
        default:
            return state;
    }
}