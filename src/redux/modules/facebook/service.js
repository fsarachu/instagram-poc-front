import _ from "lodash";

export function login() {
    return new Promise((resolve, reject) => {
        const callback = (result) => {
            if (result.authResponse) {
                resolve(result.authResponse.accessToken);
            } else {
                reject(new Error('No auth response'));
            }
        };

        const scope = [
            'public_profile',
            'email',
            'manage_pages',
            'instagram_basic',
            'instagram_manage_insights',
            'read_insights',
            'instagram_manage_comments',
            'read_audience_network_insights',
        ].join(',');

        window.FB.login(callback, {scope})
    });
}

export function getUser() {
    return new Promise((resolve, reject) => {
        const callback = (response) => {
            if (!response || response.error) {
                reject("Error fetching facebook user profile");
            } else {
                resolve(response);
            }
        };

        window.FB.api('/v3.0/me?fields=first_name,picture{url}', 'GET', {}, callback);
    });
}

export function getPages() {
    return new Promise((resolve, reject) => {
        const callback = (response) => {
            if (!response || response.error) {
                reject("Error fetching accounts");
            } else {
                resolve(response.data.map(p => ({
                    id: p.id,
                    name: p.name,
                    picture: _.get(p, 'picture.data.url'),
                    igAccountId: _.get(p, 'connected_instagram_account.id'),
                })));
            }
        };

        window.FB.api('/v3.0/me/accounts?fields=id,connected_instagram_account,name,picture{url}', 'GET', {}, callback);
    });
}