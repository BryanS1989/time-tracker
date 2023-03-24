import axios from 'axios';

const axios_sesame = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_SESAME_API_KEY}`,
    },
});

const getWorkEntrie = function () {
    console.log('[AXIOS] [getWorkEntrie]');
    return axios_sesame.get('');
};

const PostWorkEntry = function (url: string, data: Object) {
    console.log('[AXIOS] [PostWorkEntry] url: ', url, 'data: ', data);
    return axios_sesame.post(url, data);
};

export default {
    getWorkEntrie,
    PostWorkEntry,
};
