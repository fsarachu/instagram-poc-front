import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import {loadApp} from "../../redux/modules/app/actions";
import {errorLoading, isLoading} from "../../redux/modules/app/selectors";

import './App.css';
import Login from "../../views/Login/Login";
import Me from "../../views/Me/Me";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

class App extends Component {

    componentDidMount() {
        this.props.loadApp();
    }

    render() {

        const {isLoading, errorLoading} = this.props;

        if(isLoading) {
            return <h1>Loading</h1>;
        }

        if(errorLoading) {
            return <h1>ERROR: {errorLoading}</h1>;
        }

        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path='/login'
                        component={Login}
                    />

                    <ProtectedRoute
                        path='/'
                        component={Me}
                    />


                    <Route render={() => <Redirect to='/'/>}/>

                </Switch>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    errorLoading: PropTypes.string,
    loadApp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isLoading: isLoading(state),
        errorLoading: errorLoading(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadApp() {
        dispatch(loadApp());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);