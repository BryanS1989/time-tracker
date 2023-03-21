import axios from 'axios';

const axios_sesame = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VUE_APP_API_KEY}`,
    },
});

const GET_WORK_ENTRIES = function () {
    return axios_sesame.get('/');
};

const POST_WORK_ENTRIES = function (url: string, data: string) {
    return axios_sesame.post(url, data);
};

export default {
    GET_WORK_ENTRIES,
    POST_WORK_ENTRIES,
};
