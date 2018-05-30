import axios from '../../axios';

export function getAccount() {
    return axios.get(`/me`)
        .then(response => {
            return response.data;
        });
}