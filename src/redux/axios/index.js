import axios from "axios";
import config from "./config";
import interceptors from "./interceptors";

// Create axios instance
const axiosClient = axios.create(config);

// Attach request interceptors
for (let requestInterceptor of interceptors.request) {
    axiosClient.interceptors.request.use(requestInterceptor.onSuccess, requestInterceptor.onError);
}

// Attach response interceptors
for (let responseInterceptor of interceptors.response) {
    axiosClient.interceptors.response.use(responseInterceptor.onSuccess, responseInterceptor.onError);
}

export default axiosClient;