/**
 * Created by marco on 10.6.2016.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSensors, fetchSensor } from '../actions/index';
import { bindActionCreators } from 'redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class SensorsList extends Component {
    componentWillMount() {
        console.log("componentwillmount");
        console.log(this.props.fetchSensors());
        console.log("componentwillmount2");
        this.props.fetchSensors();
        console.log(this.props);
        console.log("componentwillmount3");


    }

    renderList() {
        console.log("SensorsList renderList()");
        console.log(this.props);
        return this.props.sensors.map((sensor) => {
            console.log(sensor);
           return (
             <li key={sensor.id}
                 onClick={() => this.props.fetchSensor(sensor)}
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
              {this.renderList()}
              </tbody>
          </table>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    console.log("mapStateToProps");
    console.log(state);
    return {
        sensors: state.sensors
    };
}

function mapDispatchToProps(dispatch) {
    bindActionCreators({ selectSensor: fetchSensor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, { fetchSensors, fetchSensor })(SensorsList);

