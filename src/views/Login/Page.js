import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Card, Container, Header, Image} from "semantic-ui-react";

import {
    errorFetchingPages,
    hasAccessToken,
    isFetchingPages,
    pages,
    selectedPageId,
    userName,
    userPicture
} from "../../redux/modules/facebook/selectors";
import {getPages, selectPage} from "../../redux/modules/facebook/actions";
import PageCard from "../../components/PageCard/PageCard";

class Page extends Component {

    constructor(props) {
        super(props);

        this.onPageSelect = this.onPageSelect.bind(this);
    }

    componentDidMount() {
        const {hasAccessToken, getPages} = this.props;

        if (hasAccessToken) {
            getPages();
        }
    }

    onPageSelect(pageId) {
        this.props.selectPage(pageId);
    }

    render() {
        const {hasAccessToken, pages, selectedPageId, userPicture, userName} = this.props;

        if (!hasAccessToken) {
            return (
                <Redirect to={`/login/user`}/>
            );
        }

        if (selectedPageId) {
            return (
                <Redirect to={`/login/confirm`}/>
            );
        }

        return (
            <Container>


                <Header as='h1' icon textAlign='center'>
                    <Image src={userPicture} circular/>

                    <Header.Content>
                        Hey {userName}!
                    </Header.Content>

                    <Header.Subheader>
                        Which page you want to connect to UPshow?
                    </Header.Subheader>
                </Header>

                <Card.Group centered itemsPerRow={4}>
                    {pages.map(p => (
                        <PageCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            picture={p.picture}
                            hasIgAccount={!!p.igAccountId}
                            selectPage={this.onPageSelect}
                        />
                    ))}
                </Card.Group>

            </Container>
        )
    }
}

Page.propTypes = {
    hasAccessToken: PropTypes.bool.isRequired,
    pages: PropTypes.array.isRequired,
    userPicture: PropTypes.string,
    userName: PropTypes.string,
    selectedPageId: PropTypes.string,
    isFetchingPages: PropTypes.bool.isRequired,
    errorFetchingPages: PropTypes.string,
    getPages: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired,
    location: PropTypes.object,
};


const mapStateToProps = (state) => {
    return {
        hasAccessToken: hasAccessToken(state),
        pages: pages(state),
        userPicture: userPicture(state),
        userName: userName(state),
        selectedPageId: selectedPageId(state),
        isFetchingPages: isFetchingPages(state),
        errorFetchingPages: errorFetchingPages(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPages() {
        dispatch(getPages());
    },
    selectPage(pageId) {
        dispatch(selectPage(pageId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);