import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {
    errorFetchingPages,
    hasAccessToken,
    isFetchingPages,
    pages,
    selectedPageId
} from "../../redux/modules/facebook/selectors";
import {getPages} from "../../redux/modules/facebook/actions";

class Page extends Component {

    componentDidMount() {
        const {hasAccessToken, getPages} = this.props;

        if (hasAccessToken) {
            getPages();
        }
    }

    render() {
        const {hasAccessToken, pages} = this.props;

        if (!hasAccessToken) {
            return (
                <Redirect to={`/login/user`}/>
            );
        }

        return (
            <section className='Login section'>
                <div className="container is-fluid has-text-centered">

                    <h1 className="title">Select your page to connect</h1>

                    {pages.map(p => (
                        <p key={p.id}>{p.id}: {p.name}</p>
                    ))}

                </div>
            </section>
        )
    }
}

Page.propTypes = {
    hasAccessToken: PropTypes.bool.isRequired,
    pages: PropTypes.array.isRequired,
    selectedPageId: PropTypes.string,
    isFetchingPages: PropTypes.bool.isRequired,
    errorFetchingPages: PropTypes.string,
    getPages: PropTypes.func.isRequired,
    location: PropTypes.object,
};


const mapStateToProps = (state) => {
    return {
        hasAccessToken: hasAccessToken(state),
        pages: pages(state),
        selectedPageId: selectedPageId(state),
        isFetchingPages: isFetchingPages(state),
        errorFetchingPages: errorFetchingPages(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPages() {
        dispatch(getPages());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);