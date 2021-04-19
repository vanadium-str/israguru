import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            // latitude: 32.0808800,
            // longitude: 34.7805700,
            events: [
                {
                    latitude: 32.0808800,
                    longitude: 34.7805700
                }]
        }
    }
    displayMarkers = () => {
        return this.state.events.map((oneEvent, index ) => {
            return  <Marker key={index} id={index} position={{
                lat: oneEvent.latitude,
                lng: oneEvent.longitude
            }}
            />
        });
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={7}
                //style={mapStyles}
                initialCenter={{lat: 32.0808800, lng: 34.7805700}}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'key'
})(MapContainer);