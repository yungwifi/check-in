import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import NavBar from './NavBar';

const MapStyle = styled.div`
height: 93vh;
width: 81vw;`

const MapContainer = styled.div`
display: flex; 
flex-direction: row;`

const TopBar = styled.div`
background-color: #2659DA;
height: 7vh;
width: 100vw;`

const Loader = styled.div`
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% - 4em);
  width: 6em;
  height: 6em;
  border: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  border-radius: 50%;
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`

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
        setTimeout(() => this.setState({ loading: false }), 4000);
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
                    <TopBar />
                    <NavBar />
                    Getting Your Location...
                <Loader >
                    </Loader>
                </div>
            )
        }

        return (
            <div>
                <TopBar />
                <MapContainer >
                    <NavBar />
                    <MapStyle >
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "Google API Call Goes Here" }}
                            defaultCenter={this.state.center}
                            defaultZoom={this.state.zoom}>
                        </GoogleMapReact>
                    </MapStyle>
                </MapContainer>
            </div>
        );
    }
}

export default Map;