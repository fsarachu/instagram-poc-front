import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Container, Dimmer, Header, Icon, Image, Loader, Menu, Statistic} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link, Redirect, Route, Switch} from "react-router-dom";

import {logout} from "../../redux/modules/session/actions";
import {getAccount, syncAccount} from "../../redux/modules/account/actions";
import {
    errorFetchingAccount,
    errorSyncingAccount,
    getFollowersCount,
    getFollowsCount,
    getMedia,
    getName,
    getProfilePictureUrl,
    getUsername,
    isFetchingAccount,
    isSyncingAccount
} from "../../redux/modules/account/selectors";
import Profile from "./Profile";
import Activity from "./Activity";

class Me extends Component {

    componentDidMount() {
        this.props.getAccount();
    }

    render() {

        const {match, username, followersCount, followsCount, profilePictureUrl, media, isFetchingAccount, errorFetchingAccount, isSyncingAccount, errorSyncingAccount} = this.props;

        return (
            <Container>

                <Dimmer active={isFetchingAccount} inverted page>
                    <Loader>Loading</Loader>
                </Dimmer>

                <Dimmer active={!!errorFetchingAccount} inverted page>
                    <Header as='h2' icon color='red'>
                        <Icon name='warning circle'/>
                        Ooops! {errorFetchingAccount}
                    </Header>
                </Dimmer>

                <Menu pointing>
                    <Menu.Item name='feed' as={Link} to='/me/activity'/>
                    <Menu.Item name='profile' as={Link} active to='/me/profile'/>
                    <Menu.Menu position='right'>
                        <Menu.Item href={`//instagram.com/${username}`} target='_blank'>
                            <Image src={profilePictureUrl} avatar/> <span>{username}</span>
                        </Menu.Item>
                        <Menu.Item onClick={this.props.syncAccount}>
                            <Icon loading={isSyncingAccount} color={errorSyncingAccount ? 'red' : 'black'} name='refresh'/>
                        </Menu.Item>
                        <Menu.Item name='logout' onClick={this.props.logout}/>
                    </Menu.Menu>
                </Menu>

                <Container>
                    <Statistic.Group widths={3}>
                        <Statistic>
                            <Statistic.Value>{followersCount}</Statistic.Value>
                            <Statistic.Label>Followers</Statistic.Label>
                        </Statistic>
                        <Statistic>
                            <Statistic.Value>{followsCount}</Statistic.Value>
                            <Statistic.Label>Following</Statistic.Label>
                        </Statistic>
                        <Statistic>
                            <Statistic.Value>{media.length}</Statistic.Value>
                            <Statistic.Label>Posts</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                </Container>

                <Switch>

                    <Route
                        path={`${match.url}/profile`}
                        component={Profile}
                    />

                    <Route
                        path={`${match.url}/activity`}
                        component={Activity}
                    />

                    <Route render={() => <Redirect to={`${match.url}/profile`}/>}/>

                </Switch>

            </Container>
        );
    }
}


Me.propTypes = {
    username: PropTypes.string,
    name: PropTypes.string,
    followersCount: PropTypes.number,
    followsCount: PropTypes.number,
    profilePictureUrl: PropTypes.string,
    media: PropTypes.array,
    isFetchingAccount: PropTypes.bool.isRequired,
    errorFetchingAccount: PropTypes.string,
    isSyncingAccount: PropTypes.bool.isRequired,
    errorSyncingAccount: PropTypes.string,
    getAccount: PropTypes.func.isRequired,
    syncAccount: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    location: PropTypes.object,
    match: PropTypes.object,
};


const mapStateToProps = (state) => {
    return {
        username: getUsername(state),
        name: getName(state),
        followersCount: getFollowersCount(state),
        followsCount: getFollowsCount(state),
        profilePictureUrl: getProfilePictureUrl(state),
        media: getMedia(state),
        isFetchingAccount: isFetchingAccount(state),
        errorFetchingAccount: errorFetchingAccount(state),
        isSyncingAccount: isSyncingAccount(state),
        errorSyncingAccount: errorSyncingAccount(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout() {
        dispatch(logout());
    },
    getAccount() {
        dispatch(getAccount());
    },
    syncAccount() {
        dispatch(syncAccount());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Me);