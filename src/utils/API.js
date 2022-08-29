import axios from 'axios';

export default {
    getPosts: function () {
        const response = axios.get('/post/all');
        return response;
    }
}