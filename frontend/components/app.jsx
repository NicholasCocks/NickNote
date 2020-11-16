import React from "react";
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import Splash from "./splash/splash";
import NotesIndex from './notes/notes_index';

const App = () => {
    return (
        <div>
            <Route path="/signup" component={SignupContainer} />
            <Route exact path="/" component={Splash} />
            <Route exact path="/notes" component={NotesIndex} />
        </div>
    )
}

export default App;