export default {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://ig-poc.herokuapp.com' : 'http://localhost:5050',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
};
