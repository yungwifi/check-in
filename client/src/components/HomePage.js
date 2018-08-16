import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

class HomePage extends Component {

    state = {
        lat: '',
        long: '',
    }

    componentDidMount() {
        console.log("Component did mount")
        this.getLocation()
    }

    getLocation = async () => {
        let startPos = {}
        console.log("Get location ")
        await navigator.geolocation.getCurrentPosition(function (position) {
            startPos = position
            console.log(position)
        })
        await setTimeout(
            function () {
                this.setState({
                    lat: startPos.coordinates.latitude,
                    long: startPos.coordinates.longitude
                });
            }.bind(this),
            3000
        );
    }

    render() {
        return (
            <div>
                <div> Hi Welcome </div>
                <p>
                    Current Location (lat, lon):<br />
                    <span>{this.currentLat}</span>°, <span>{this.currentLon}</span>°
                    </p>
            </div>
        );
    }
}

export default HomePage;