import axios from 'axios';

const API = axios.create({baseURL : 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        req.headers.role = `${JSON.parse(localStorage.getItem('profile')).result.role}`
    }

    return req;
});



export const getMenu = () => API.get('/api');
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const postOrder = (data) => API.post('/orders', data);
export const gettingOrder = (id) => API.post('/orders/user',  id);
export const getAdminDash = () => API.get('/dashboard');
export const updateStatus = (data) => API.post('/orders/status', data);
export const getStatus = (id) => API.get(`/status/${id}`);