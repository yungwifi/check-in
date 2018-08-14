import React, { Component } from 'react';

class HomePage extends Component {

    state = {
        currentLat: '',
        currentLon: ''
    }

    componentDidMount() {
        this.getLocation()
    }

    getLocation = () => {
        var startPos
        navigator.geolocation.getCurrentPosition(function (position) {
            startPos = position
            console.log(startPos)
        })
        this.setState({
            currentLat: startPos.coords.latitude,
            currentLon: startPos.coords.longitude
        });
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