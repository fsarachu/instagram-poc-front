import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Button, Container, Dimmer, Header, Image, Loader, Message} from "semantic-ui-react";

import {login} from "../../redux/modules/session/actions";
import {accessToken, hasAccessToken, selectedPage, userName, userPicture} from "../../redux/modules/facebook/selectors";
import {isAuthenticated, isLoggingIn, loginError} from "../../redux/modules/session/selectors";

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.onConfirm = this.onConfirm.bind(this);
    }

    onConfirm() {
        const {login, selectedPage, accessToken} = this.props;

        if (selectedPage && accessToken) {
            login(accessToken, selectedPage.id);
        } else {
            console.error(accessToken, selectedPage);
        }
    }

    render() {
        const {hasAccessToken, selectedPage, userName, isLoggingIn, loginError, userPicture} = this.props;

        if (!hasAccessToken || !selectedPage) {
            return (
                <Redirect to={`/login`}/>
            );
        }

        return (
            <Container textAlign='center' text>

                <Header as='h2' icon textAlign='center'>

                    <Image src={userPicture} circular/>
                    <Image src={selectedPage.picture} circular/>

                    <Header.Content>
                        Hey {userName}, you will connect your business page "{selectedPage.name}" to UPshow
                    </Header.Content>
                </Header>

                <Button
                    primary
                    onClick={this.onConfirm}
                    color='facebook'
                    loading={isLoggingIn}
                    disabled={isLoggingIn}
                >
                    Confirm!
                </Button>

                <Dimmer
                    active={isLoggingIn}
                    page
                    inverted
                >
                    <Header as='h2'>
                        <Loader>Creating UPshow Account</Loader>
                    </Header>
                </Dimmer>

                {loginError && (
                    <Message negative>
                        <Message.Header>{loginError}</Message.Header>
                    </Message>
                )}

            </Container>
        );
    }
}

Confirm.propTypes = {
    hasAccessToken: PropTypes.bool.isRequired,
    accessToken: PropTypes.string,
    selectedPage: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        igAccountId: PropTypes.string.isRequired,
    }),
    isLoggingIn: PropTypes.bool.isRequired,
    userName: PropTypes.string,
    userPicture: PropTypes.string,
    loginError: PropTypes.string,
    login: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
        hasAccessToken: hasAccessToken(state),
        accessToken: accessToken(state),
        selectedPage: selectedPage(state),
        userName: userName(state),
        userPicture: userPicture(state),
        isLoggingIn: isLoggingIn(state),
        loginError: loginError(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    login(accessToken, pageId) {
        dispatch(login(accessToken, pageId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);