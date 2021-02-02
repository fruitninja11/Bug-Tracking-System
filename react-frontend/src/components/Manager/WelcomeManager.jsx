import React, { Component } from 'react';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';
class WelcomeManager extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

export default WelcomeManager;