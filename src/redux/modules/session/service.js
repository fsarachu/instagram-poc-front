import axios from '../../axios';

export function login(accessToken, pageId) {
    return axios.post(`/auth/facebook`, {accessToken, pageId})
        .then(response => {
            const authHeader = response.headers['authorization'];

            if (typeof authHeader !== "string") {
                throw new Error("No Authorization header response");
            }

            return authHeader.slice(7);
        });
}