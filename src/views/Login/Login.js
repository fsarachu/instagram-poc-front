import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {fbLogin} from "../../redux/modules/facebook/actions";
import {hasAccessToken, isLoggingIn, loginError} from "../../redux/modules/facebook/selectors";
import {isAuthenticated} from "../../redux/modules/session/selectors";

class Login extends Component {

    render() {
        const {isLoggingIn, loginError, hasAccessToken, fbLogin, location, isAuthenticated} = this.props;

        const {from} = location.state || {from: {pathname: '/'}};

        if (isAuthenticated) {
            return (
                <Redirect to={from}/>
            );
        }

        return (
            <section className='Login section'>
                <div className="container is-fluid has-text-centered">

                    <h1 className="title">Login with Facebook</h1>

                    {hasAccessToken ? (
                        <h3>Logged In :)</h3>
                    ) : (
                        <button onClick={fbLogin}
                                className={`button is-large is-link ${isLoggingIn ? 'is-loading' : ''}`}
                                disabled={isLoggingIn}
                        >
                        <span className="icon">
                            <i className="fab fa-facebook"></i>
                        </span>
                            <span>Login</span>
                        </button>
                    )}


                    {loginError}

                </div>
            </section>
        );
    }
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    hasAccessToken: PropTypes.bool.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    loginError: PropTypes.string,
    fbLogin: PropTypes.func.isRequired,
    location: PropTypes.object,
};


const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
        hasAccessToken: hasAccessToken(state),
        isLoggingIn: isLoggingIn(state),
        loginError: loginError(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    fbLogin() {
        dispatch(fbLogin());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);