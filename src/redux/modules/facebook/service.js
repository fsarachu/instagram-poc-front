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
        console.log('--> Get Pages');
        const callback = (response) => {
            if (!response || response.error) {
                reject("Error fetching accounts");
            } else {
                console.log(response);
                resolve(response);
            }
        };

        window.FB.api('/v3.0/me/accounts?fields=connected_instagram_account,name,picture', 'GET', {}, callback);
    });
}