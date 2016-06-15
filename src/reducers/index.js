import { combineReducers } from 'redux';

import ActiveSensorReducer from './reducer_active_sensor';
import SensorsReducer from './reducer_sensors';

const rootReducer = combineReducers({
  activeSensor: ActiveSensorReducer,
  sensors: SensorsReducer
});

export default rootReducer;
