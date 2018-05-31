import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Container, Feed, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {getActivity} from "../../redux/modules/account/selectors";

class Activity extends Component {

    getEvents() {
        return this.props.activity.map(({event, data}) => {

            switch(event) {
                case 'post_comment': {
                    return {
                        date: data.timestamp,
                        icon: 'comment',
                        summary: `${data.username} commented your post: `,
                        extraText: data.text,
                        meta: `${data.likeCount} likes`
                    };
                }

                case 'comment_mention': {
                    return {
                        date: data.timestamp,
                        icon: 'comment',
                        summary: `${data.username} mentioned you in a comment: `,
                        extraText: data.text,
                        meta: `${data.likeCount} likes`
                    };
                }

                case 'caption_mention': {
                    return {
                        date: data.timestamp,
                        icon: 'comment',
                        summary: `${data.username} commented you in a post's caption: `,
                        extraText: data.caption,
                        extraImages: [data.mediaUrl],
                        meta: `${data.likeCount} likes`
                    };
                }

                default: {
                    console.error('Unkown activity event type');
                    return null;
                }
            }

        });
    }

    render() {
        return (
            <Container text>
                <Segment padded basic>
                <Feed events={this.getEvents()}/>
                </Segment>
            </Container>
        );
    }
}


Activity.propTypes = {
    activity: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => {
    return {
        activity: getActivity(state),
    };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Activity);