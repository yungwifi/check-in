import React, { Component } from 'react';

class HomePage extends Component {

    state = {
        lat: '',
        long: '',
        loaded: false,
    }

    componentDidMount() {
        this.getLocation()
    }

    getLocation = async () => {
        let startPos = {}
        await navigator.geolocation.getCurrentPosition(function (position) {
            startPos = position.coords
            console.log(startPos)
        })
        await setTimeout(
            function () {
                this.setState({
                    lat: startPos.latitude,
                    long: startPos.longitude,
                    loaded: true
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