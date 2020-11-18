import React from "react";
import SessionPage from '../components/session/session_page'
import { ProtectedRoute, AuthRoute } from '../util/route_util'
import NotesAppContainer from './notes/notes_app_container';

const App = () => {
    return (
        <div>
            <AuthRoute path="/session" component={SessionPage}/>
            <ProtectedRoute path="/notes" component={NotesAppContainer} />
        </div>
    )
}

export default App;