import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID 77e7fdedc19021d304455ae994553bb7367a346d8b5801225760c0a9129d15d9'}
})