// src/api/service/authService.js
import axios from 'axios';
import { AuthRoutes } from '../routes';

export const login = async (credentials) => {
  // Static Login Bypass
  const staticUsers = {
    'admin': {
      password: '123',
      data: {
        token: 'mock-token-admin',
        username: 'Admin',
        rol: 'admin', // Adjust based on actual role values expected
        role_id: 1,
        modulos: ['DASHBOARD', 'USERS', 'REPORTS']
      }
    },
    'collaborator': {
      password: '123',
      data: {
        token: 'mock-token-collab',
        username: 'Collaborator',
        rol: 'operario',
        role_id: 2,
        modulos: ['TASKS', 'REPORTS']
      }
    },
    'regular': {
      password: '123',
      data: {
        token: 'mock-token-user',
        username: 'Regular',
        rol: 'Usuario',
        role_id: 3,
        modulos: ['PROFILE']
      }
    }
  };

  // Try backend first
  try {
    const response = await axios.post(AuthRoutes.LOGIN, credentials);
    return response.data;
  } catch (error) {
    console.log("Backend login failed, checking static users...");

    // Fallback to static users
    const usernameLower = credentials.username.toLowerCase();
    if (staticUsers[usernameLower] && staticUsers[usernameLower].password === credentials.password) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(staticUsers[usernameLower].data);
        }, 500); // Simulate network delay
      });
    }

    // If not a static user or password wrong, rethrow the original error
    throw error;
  }
};

export const registerUser = async (payload) => {
  try {
    const response = await axios.post(AuthRoutes.REGISTER, payload);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
