import React from 'react';
import SignupContainer from './signup_container';
import LoginFormContainer from './login_form_container';
import { AuthRoute } from '../../util/route_util';
import { Switch } from 'react-router-dom';

class SessionPage extends React.Component {

    render() {
        return (
        <div className="session_background_picture">
            <img src="assets/leaves.jpg" className="session_background_picture"></img>
            <div className="session_page">
                <div className="session_page_header">
                    <img src="assets/sloth3.png" className="session_logo"></img>
                    <h1>Nicknote</h1>
                    <p>Remember everything important.</p>
                </div>
                <Switch>
                    <AuthRoute exact path="/session/login" component={LoginFormContainer}/>
                    <AuthRoute component={SignupContainer}/>
                </Switch>
            </div>
        </div>
        )
    }
}

export default SessionPage;