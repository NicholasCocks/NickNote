import React from "react";
import SignupContainer from './session/signup';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Route path="/signup" component={SignupContainer} />
        </div>
    )
}

export default App;