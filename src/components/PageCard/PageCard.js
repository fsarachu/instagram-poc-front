import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Dimmer, Header, Icon, Image} from 'semantic-ui-react';

class PageCard extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {id, selectPage, hasIgAccount} = this.props;

        if (hasIgAccount) {
            selectPage(id);
        }
    }

    render() {

        const {name, picture, hasIgAccount} = this.props;

        return (
            <Card onClick={this.onClick}>

                <Image
                    src={picture}
                    dimmer={
                        <Dimmer active={!hasIgAccount} inverted>
                            <Header as='h2' size='small' icon>
                                <Icon name='instagram'/>
                                No Instagram account connected
                            </Header>
                        </Dimmer>
                    }
                    fluid
                />

                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                </Card.Content>

            </Card>
        );
    }
}

PageCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    hasIgAccount: PropTypes.bool.isRequired,
    selectPage: PropTypes.func.isRequired,
};

export default PageCard;