/**
 * Created by marco on 10.6.2016.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class SensorList extends Component {

    renderList() {
        return this.props.sensors.map((sensor) => {
           return (
             <li key={sensor.id}
                 onClick={() => this.props.selectSensor(sensor)}
                 className="list-group-item">{sensor.name}</li>
           );
        });
    }

    render() {
        console.log("SensorList render()")
        return (
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Purpose</th>

                </tr>
            </thead>
              <tbody>
              {this.props.sensors.map(this.renderList)}
              </tbody>
          </table>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        sensors: state.sensors
    };
}

export default connect(mapStateToProps)(SensorList);

