import Interceptor from "../Interceptor";


export default new Interceptor((response) => {
    if (typeof response === 'undefined') {
        return Promise.reject(new Error('No response, probably CORS or Network Down issue'));
    }

    return response;
});