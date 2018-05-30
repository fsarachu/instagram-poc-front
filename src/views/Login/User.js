import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Button, Container, Header, Icon, Message} from "semantic-ui-react";

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
            <Container textAlign='center'>

                <Header as='h2' icon textAlign='center'>
                    <Icon name='user' circular/>
                    <Header.Content>
                        Welcome!
                    </Header.Content>
                </Header>

                <Button
                    onClick={fbLogin}
                    color='facebook'
                    loading={isLoggingIn}
                    disabled={isLoggingIn}
                >
                    <Icon name='facebook'/> Log In
                </Button>

                {loginError && (
                    <Message negative>
                        <Message.Header>{loginError}</Message.Header>
                    </Message>
                )}
            </Container>
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