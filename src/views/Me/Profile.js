import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Card, Container, Icon, Image} from "semantic-ui-react";
import {connect} from "react-redux";
import {getMedia} from "../../redux/modules/account/selectors";

function truncate(text) {
    if(typeof text === 'string' && text.length > 60) {
        return text.slice(0, 90) + '...';
    }

    return text;
}

class Profile extends Component {
    render() {
        return (
            <Container>
                <Card.Group centered>
                    {this.props.media.map(m => (
                        <Card key={m.id} href={m.permalink} target='_blank'>
                            <Image style={{height: 180, objectFit: 'cover'}} src={m.media_url} fluid/>
                            <Card.Content>
                                <Card.Header>{m.username}</Card.Header>
                                <Card.Description>{truncate(m.caption)}</Card.Description>
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
        );
    }
}


Profile.propTypes = {
    media: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => {
    return {
        media: getMedia(state),
    };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);