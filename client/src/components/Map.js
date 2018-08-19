import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import REACT_APP_GOOGLE_API_KEY from 'dotenv'

const MapStyle = styled.div`
height: 100vh;
width: 100%;`

class Map extends Component {
    state = {
        center: {
            lat: 33.74,
            lng: 84.38
        },
        zoom: 11,
        loading: true
    };

    componentDidMount() {
        this.getLocation()
    }

    getLocation = async () => {
        let center = { ...this.state.center }
        await navigator.geolocation.getCurrentPosition(function (position) {
            center.lat = position.coords.latitude
            center.lng = position.coords.longitude
            console.log(center)
        })
        await this.setState({
            center: center,
            loading: false
        })
    }

    render() {

        if (this.state.loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div>
                <MapStyle >
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_API_KEY }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}>
                    </GoogleMapReact>
                </MapStyle>
            </div>
        );
    }
}

export default Map;