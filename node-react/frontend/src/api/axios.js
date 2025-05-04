import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api', // La URL de tu backend
    timeout: 1000, // Set a timeout for requests (in milliseconds)
});

// Interceptores para manejar errores globalmente
instance.interceptors.request.use(
    (response) => response,
    (error) => {
        if (error.response) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    }
    
);
export default instance;