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

export function getPages() {
    return new Promise((resolve, reject) => {
        const callback = (response) => {
            if (!response || response.error) {
                reject("Error fetching accounts");
            } else {
                resolve(response.data);
            }
        };

        window.FB.api('/v3.0/me/accounts?fields=id,connected_instagram_account,name,picture{url}', 'GET', {}, callback);
    });
}