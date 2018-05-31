import axios from '../../axios';

export function getAccount() {
    return axios.get(`/me`)
        .then(response => {
            return response.data;
        });
}

export function syncAccount() {
    return axios.post(`/me/sync`)
        .then(response => {
            return response.data;
        });
}