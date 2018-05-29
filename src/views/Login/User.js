import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {fbLogin} from "../../redux/modules/facebook/actions";
import {hasAccessToken, isLoggingIn, loginError} from "../../redux/modules/facebook/selectors";

class User extends Component {

    render() {
        const {isLoggingIn, loginError, hasAccessToken, fbLogin} = this.props;

        if (hasAccessToken) {
            return (
                <Redirect to={`/login/page`}/>
            );
        }

        return (
            <section className='Login section'>
                <div className="container is-fluid has-text-centered">

                    <h1 className="title">Login with Facebook</h1>

                    <button onClick={fbLogin}
                            className={`button is-large is-link ${isLoggingIn ? 'is-loading' : ''}`}
                            disabled={isLoggingIn}
                    >
                        <span className="icon">
                            <i className="fab fa-facebook"></i>
                        </span>
                        <span>Login</span>
                    </button>


                    {loginError}

                </div>
            </section>
        );
    }
}

User.propTypes = {
    hasAccessToken: PropTypes.bool.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    loginError: PropTypes.string,
    fbLogin: PropTypes.func.isRequired,
    location: PropTypes.object,
};


const mapStateToProps = (state) => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(User);