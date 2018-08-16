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
            startPos = position.coords
            console.log(startPos)
        })
        await setTimeout(
            function () {
                this.setState({
                    lat: startPos.latitude,
                    long: startPos.longitude
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
                    <span>{this.state.lat}</span>°, <span>{this.state.long}</span>°
                    </p>
            </div>
        );
    }
}

export default HomePage;