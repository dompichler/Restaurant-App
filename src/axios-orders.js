import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-eccf1.firebaseio.com/'
});

export default instance;