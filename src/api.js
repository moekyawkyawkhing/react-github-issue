import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.github.com/',
    timeout: 3000,
    headers: { 
        'Authorization' :  `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
});