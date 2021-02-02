import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {

        let year = new Date().getFullYear();
        return(
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved {year}</span>
                </footer>
            </div>
        );
    }
}


export default FooterComponent;