import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <Link to="/signup" >signup</Link>
            </div>
        )
    }
}

export default Splash;