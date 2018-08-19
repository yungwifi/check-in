import React, { Component } from 'react';
import Map from './Map';

class HomePage extends Component {

    render() {

        return (
            <div>
                <Map lattitude={this.state.lat} longitude={this.state.long} />
            </div>
        );
    }
}

export default HomePage;