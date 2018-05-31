import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import {loadApp} from "../../redux/modules/app/actions";
import {errorLoading, isLoading} from "../../redux/modules/app/selectors";

import './App.css';
import Login from "../../views/Login/Login";
import Me from "../../views/Me/Me";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {Container, Dimmer, Header, Icon, Loader} from "semantic-ui-react";

class App extends Component {

    componentDidMount() {
        this.props.loadApp();
    }

    render() {

        const {isLoading, errorLoading} = this.props;

        if (isLoading) {
            return (
                <Container>
                    <Dimmer active inverted page>
                        <Loader>Loading</Loader>
                    </Dimmer>
                </Container>
            );
        }

        if (errorLoading) {
            return (
                <Container>
                    <Dimmer active inverted page>
                        <Header as='h2' icon color='red'>
                            <Icon name='warning circle'/>
                            Ooops! {errorLoading}
                        </Header>
                    </Dimmer>
                </Container>
            );
        }

        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path='/login'
                        component={Login}
                    />

                    <ProtectedRoute
                        path='/me'
                        component={Me}
                    />

                    <Route render={() => <Redirect to='/me'/>}/>

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