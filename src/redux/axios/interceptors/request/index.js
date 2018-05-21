import addAuthorizationHeader from "./addAuthorizationHeader";

const interceptors = [
    addAuthorizationHeader,
];

export default interceptors;