import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const MapStyle = styled.div`
height: 100vh;
width: 100%;`

class Map extends Component {
    state = {
        loading: true,
        zoom: 15,
        center: {
            lat: 33.74,
            lng: -84.38
        }
    };

    componentDidMount() {
        this.getLocation()
        setTimeout(() => this.setState({ loading: false }), 3000);
    }

    getLocation = async () => {
        let center = { ...this.state.center }
        navigator.geolocation.getCurrentPosition(function (position) {
            center.lat = position.coords.latitude
            center.lng = position.coords.longitude
            console.log(center.lat, center.lng)
        })
        await this.setState({
            center: center
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
                        bootstrapURLKeys={{ key: "Google API Key goes here" }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}>
                    </GoogleMapReact>
                </MapStyle>
            </div>
        );
    }
}

export default Map;