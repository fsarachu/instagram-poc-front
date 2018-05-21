import React from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

import {isAuthenticated} from "../../redux/modules/session/selectors";

const ProtectedRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location.pathname}
                }}/>
            )
        )}/>
    );
};


const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default connect(mapStateToProps)(ProtectedRoute);