/**
 * Created by marco on 15/06/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SensorsList from './containers/sensor_list';
// import SensorForm from './containers/sensor_new';
// import SensorDetail from './containers/sensor_detail';
// import SensorDelete from './containers/sensor_delete_confirmation';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={SensorsList} />
        {/* <Route path="sensors/new" component={SensorNew} /> */ }
        {/* <Route path="sensors/:id" component={SensorDetail} /> */ }
        {/* <Route path="sensors/delete/:id" component={SensorDelete} /> */ }
    </Route>
);
