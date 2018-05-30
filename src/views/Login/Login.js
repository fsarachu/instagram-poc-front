import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {Container, Icon, Segment, Step} from 'semantic-ui-react'

import {hasAccessToken, hasSelectedPage} from "../../redux/modules/facebook/selectors";
import {isAuthenticated} from "../../redux/modules/session/selectors";
import User from "./User";
import Page from "./Page";
import Confirm from "./Confirm";

class Login extends Component {

    render() {
        const {match, isAuthenticated, hasAccessToken, hasSelectedPage} = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to='/'/>
            );
        }

        return (
            <Container>

                <Segment basic padded textAlign='center'>
                    <Step.Group>

                        <Step
                            active={!hasAccessToken}
                            disabled={hasAccessToken}
                        >
                            <Icon name='user'/>
                            <Step.Content>
                                <Step.Title>Facebook Log in</Step.Title>
                            </Step.Content>
                        </Step>

                        <Step
                            active={hasAccessToken && !hasSelectedPage}
                            disabled={!(hasAccessToken && !hasSelectedPage)}
                        >
                            <Icon name='building'/>
                            <Step.Content>
                                <Step.Title>Connect Your Business Page</Step.Title>
                            </Step.Content>
                        </Step>

                        <Step
                            active={hasAccessToken && hasSelectedPage}
                            disabled={!(hasAccessToken && hasSelectedPage)}
                        >
                            <Icon name='check'/>
                            <Step.Content>
                                <Step.Title>Confirm</Step.Title>
                            </Step.Content>
                        </Step>

                    </Step.Group>
                </Segment>

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
                        path={`${match.url}/confirm`}
                        component={Confirm}
                    />

                    <Route render={() => <Redirect to={`${match.url}/user`}/>}/>

                </Switch>

            </Container>
        );
    }
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    hasAccessToken: PropTypes.bool.isRequired,
    hasSelectedPage: PropTypes.bool.isRequired,
    location: PropTypes.object,
    match: PropTypes.object,
};


const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
        hasAccessToken: hasAccessToken(state),
        hasSelectedPage: hasSelectedPage(state),
    };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);