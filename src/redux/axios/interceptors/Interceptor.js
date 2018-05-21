export default class Interceptor {

    constructor(successHandler, errorHandler = Interceptor.defaultErrorHandler) {
        this.onSuccess = successHandler;
        this.onError = errorHandler;
    }

    static defaultErrorHandler (error) {
        return Promise.reject(error);
    }

}