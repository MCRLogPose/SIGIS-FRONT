// src/api/service/authService.js
import axios from 'axios';
import { AuthRoutes } from '../routes';

export const login = async (credentials) => {
    const response = await axios.post(AuthRoutes.LOGIN, credentials);
    return response.data;
};
