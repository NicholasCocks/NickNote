import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <div className="session-link-button">
                    <Link to="/session" >signup</Link>
                </div>
            </div>
        )
    }
}

export default Splash;