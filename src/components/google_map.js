/**
 * Created by marco on 11.6.2016.
 */
import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
const GOOGLEMAP_API_KEY = 'AIzaSyAshf8NOLrw5blS7CqT-_6RXmYH66SmF5s';

export default (props) => {

    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
        />
    );
}