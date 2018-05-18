import React, {Component} from 'react';

function loadFacebookSDK(onLoad, onError) {
    const d = window.document;
    const s = 'script';
    const id = 'facebook-jssdk';

    if (!d.getElementById(id)) {
        const fjs = d.getElementsByTagName(s)[0];
        const js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        js.onload = onLoad;
        js.onerror = onError;
        fjs.parentNode.insertBefore(js, fjs);
    }
}

class FbSdkProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            errorLoading: null,
        };

        this.onLoad = this.onLoad.bind(this);
        this.onError = this.onError.bind(this);
    }

    componentDidMount() {
        loadFacebookSDK(this.onLoad, this.onError);
    }

    onLoad() {
        const FB = window.FB;
        console.log('--> Loaded SDK');
        console.log(FB);

        try {
            FB.init({
                appId: '463375200785413',
                cookie: true,
                xfbml: true,
                version: 'v2.12'
            });

            FB.AppEvents.logPageView();

            this.setState({isLoading: false, errorLoading: null});
        } catch (e) {
            this.onError(e);
        }
    }

    onError(e) {
        console.error(e);
        this.setState({isLoading: false, errorLoading: `Couldn't load/initialize Facebook SDK`});
    }

    render() {
        if (this.state.isLoading) {
            return (
                <section className="section">
                    <div className="container is-fluid has-text-centered">
                        <h1 className="title">Loading Facebook SDK</h1>
                        <span className="icon is-large"><i className="fas fa-2x fa-spinner fa-spin"/></span>
                    </div>
                </section>
            );
        }

        if (this.state.errorLoading) {
            return (
                <section className="section">
                    <div className="container has-text-centered">
                        <h1 className="title has-text-danger">Error: {this.state.errorLoading}</h1>
                    </div>
                </section>
            );
        }

        return this.props.children;
    }
}

export default FbSdkProvider;