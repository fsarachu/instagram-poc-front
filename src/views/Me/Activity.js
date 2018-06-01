import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Container, Feed, Segment} from "semantic-ui-react";
import moment from "moment";

import {connect} from "react-redux";
import {getActivity} from "../../redux/modules/account/selectors";

class Activity extends Component {

    getEvents() {
        return this.props.activity.map(({event, data}) => {

            const common = {
                date: moment(data.timestamp).fromNow(),
                meta: `0 Likes`
            };

            switch(event) {
                case 'post_comment': {
                    return {
                        ...common,
                        icon: 'comment',
                        summary: `${data.username} commented your post: `,
                        extraText: data.text,
                    };
                }

                case 'comment_mention': {
                    return {
                        ...common,
                        icon: 'at',
                        summary: `${data.username} mentioned you in a comment: `,
                        extraText: data.text,
                    };
                }

                case 'caption_mention': {
                    return {
                        ...common,
                        icon: 'at',
                        summary: `${data.username} commented you in a post's caption: `,
                        extraText: data.caption,
                        extraImages: [data.mediaUrl],
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