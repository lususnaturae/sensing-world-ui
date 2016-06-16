import { combineReducers } from 'redux';

import SelectSensorReducer from './reducer_select_sensor';
import SensorsReducer from './reducer_sensors';

const rootReducer = combineReducers({
  selectSensor: SelectSensorReducer,
  sensors: SensorsReducer
});

export default rootReducer;
