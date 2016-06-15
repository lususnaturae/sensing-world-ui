/**
 * Created by marco on 15/06/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SensorForm extends Component {
    render() {
        if (!this.props.sensor) {
            return <div>Select a sensor to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.sensor.name}</div>
                <div>Usage: {this.props.sensor.usagetoken}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeSensor: state.activeSensor
    };
}

export default connect(mapStateToProps)(SensorDetail);
