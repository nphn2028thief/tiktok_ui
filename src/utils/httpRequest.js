import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export { httpRequest, get };
