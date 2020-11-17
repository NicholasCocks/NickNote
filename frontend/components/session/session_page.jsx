import React from 'react';
import SignupContainer from './signup_container';
import LoginFormContainer from './login_form_container';
import { AuthRoute } from '../../util/route_util';
import { Switch } from 'react-router-dom';

class SessionPage extends React.Component {

    render() {
        return (
        <div className="session_form">
            <h1>Nick Note</h1>
            <p>remember everything important</p>
             <Switch>
                <AuthRoute exact path="/session/login" component={LoginFormContainer}/>
                <AuthRoute component={SignupContainer}/>
            </Switch>
        </div>
        )
    }
}

export default SessionPage;