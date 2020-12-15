import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <img src={window.country_road} className="session_background_picture" />
                
                <header className="splash_nav_bar">
                    <section>
                        <img src={window.sloth} className="session_logo" />
                        <h3>NickNote</h3>
                    </section>
                    <section>
                        <Link to="/session/login" className="login_link">login</Link>
                    </section>
                </header>

                <div className="splash_body">
                    <h1>Accomplish more with better notes</h1>
                    <h3>Nicknote helps you capture ideas and find them fast.</h3>
                    <Link to="/session" className="signup_link">Sign up for free</Link>
                    <p>or try our demo user on the signup page.</p>
                </div>

                <footer className="splash_footer">
                    <a href="https://github.com/NickDjukic" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/nicholas-cocks/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <p>by <a href="https://nickdjukic.github.io/" target="_blank"><u>Nicholas Cocks</u></a></p>
                </footer>
            </div>
        )
    }
}

export default Splash;