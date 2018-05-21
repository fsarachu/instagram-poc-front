import axios from '../../axios';

export function login(accessToken, pageId) {
    return axios.post(`/auth/facebook`, {'access_token': accessToken})
        .then(response => {
            const token = response.headers['x-auth-token'];
            if (token) {
                localStorage.setItem('jwt', token);
            }
            return token;
        });
}