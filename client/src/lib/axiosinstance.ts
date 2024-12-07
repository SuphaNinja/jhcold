import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jhc-client-u5ez.vercel.app'
});

export default axiosInstance;