import { HttpType } from '@utils/constants';

const createRequest = (method, { body, ...config } = {}) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'mode': 'no-cors'
    };
    
    const request = {
        method: method,
        ...config,
        headers: {
            ...config.headers,
            ...headers
        }
    };
    if (body) {
        request.body =  JSON.stringify(body);
    }
    return request;
};

const send = async (
    endpoint = '',
    requestInit = createRequest(HttpType.GET)
) => {
    try {
        const response = await fetch(endpoint, requestInit);
        if (response.ok) {
            return response;
        }
        throw new Error(response.statusText);
    } catch (error) {
        return Promise.reject(error.message ? error.message : {})
    }
};

const HttpClient = {
    send,
    createRequest
};

export { HttpClient };