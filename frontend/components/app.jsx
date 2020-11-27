import React from "react";
import SessionPage from '../components/session/session_page'
import Splash from '../components/splash/splash';
import { ProtectedRoute, AuthRoute } from '../util/route_util'
import NotesAppContainer from './notes/notes_app_container';

const App = () => {
    //put switch statement so that they are redirected splash page
    return (
        <div>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute path="/session" component={SessionPage}/>
            <ProtectedRoute path="/notes" component={NotesAppContainer} />
        </div>
    )
}

export default App;