import React from "react";
import SignupContainer from './session/signup_container';
import SessionPage from '../components/session/session_page'
import { ProtectedRoute, AuthRoute } from '../util/route_util'
import Splash from "./splash/splash";
import NotesIndexContainer from './notes/notes_index_container';

const App = () => {
    return (
        <div>
            <AuthRoute path="/session" component={SessionPage}/>
            <ProtectedRoute exact path="/notes" component={NotesIndexContainer} />
        </div>
    )
}

export default App;