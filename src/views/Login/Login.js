import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import {fbLogin} from "../../redux/modules/facebook/actions";
import {hasAccessToken, isLoggingIn, loginError} from "../../redux/modules/facebook/selectors";
import {isAuthenticated} from "../../redux/modules/session/selectors";
import User from "./User";
import Page from "./Page";

class Login extends Component {

    render() {
        const {match, location, isAuthenticated} = this.props;

        const {from} = location.state || {from: {pathname: '/'}};

        if (isAuthenticated) {
            return (
                <Redirect to={from}/>
            );
        }

        return (
            <Switch>

                <Route
                    path={`${match.url}/user`}
                    component={User}
                />

                <Route
                    path={`${match.url}/page`}
                    component={Page}
                />

                <Route
                    path={`${match.url}/connect`}
                    render={() => <h1>Connect</h1>}
                />

                <Route render={() => <Redirect to={`${match.url}/user`}/>}/>

            </Switch>
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
    match: PropTypes.object,
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