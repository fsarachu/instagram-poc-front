import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Card, Container, Icon, Image, Menu, Statistic} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {logout} from "../../redux/modules/session/actions";
import {getAccount} from "../../redux/modules/account/actions";
import {
    errorFetchingAccount,
    getFollowersCount,
    getFollowsCount,
    getMedia,
    getName,
    getProfilePictureUrl,
    getUsername,
    isFetchingAccount
} from "../../redux/modules/account/selectors";

class Me extends Component {

    componentDidMount() {
        this.props.getAccount();
    }

    render() {

        const {username, followersCount, followsCount, profilePictureUrl, media} = this.props;

        return (
            <Container>

                <Menu pointing>
                    <Menu.Item name='profile' as={Link} active to='/me/profile'/>
                    <Menu.Item name='mentions' as={Link} to='/me/mentions'/>
                    <Menu.Menu position='right'>
                        <Menu.Item href={`//instagram.com/${username}`} target='_blank'>
                            <Image src={profilePictureUrl} avatar/> <span>{username}</span>
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

                <Container>
                    <Card.Group centered>
                        {media.map(m => (
                            <Card key={m.id}>
                                <Image src={m.media_url} fluid/>
                                <Card.Content>
                                    <Card.Header>{m.username}</Card.Header>
                                    <Card.Description>{m.caption}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <span>
                                       <Icon name='heart'/>
                                        {m.like_count} Likes
                                    </span>
                                    &nbsp;
                                    <span>
                                       <Icon name='comments'/>
                                        {m.comments_count} Comments
                                   </span>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                </Container>

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
    getAccount: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
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
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout() {
        dispatch(logout());
    },
    getAccount() {
        dispatch(getAccount());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Me);