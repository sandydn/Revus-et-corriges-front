import React, { Component } from 'react'
import RC from '../pictures/RC.png';

class Logo extends Component {
    render() {
        return (
            <>
                <header>
                    <img src={RC} className="RcLogo" alt="logodeRevusEtCorrigés" />
                </header>
            </>
        )
    }
}

export default Logo;