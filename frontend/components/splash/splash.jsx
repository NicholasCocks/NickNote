import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <Link to="/session" >signup</Link>
            </div>
        )
    }
}

export default Splash;