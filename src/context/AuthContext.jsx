// src/context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Datos decodificados del token
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      if (storedToken.startsWith('mock-token-')) {
        // Handle mock token
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser({
            id: 999, // Dummy ID
            username: parsedUser.username,
            role: parsedUser.rol,
          });
          setToken(storedToken);
        }
      } else {
        try {
          const decoded = jwtDecode(storedToken);
          setUser({
            id: decoded.user_id,
            username: decoded.sub,
            role: decoded.role,
          });
          setToken(storedToken);
        } catch (error) {
          console.error('Error al decodificar el token:', error);
          logout(); // En caso de token inválido
        }
      }
    }
  }, []);

  const login = (userData, jwtToken) => {
    if (jwtToken.startsWith('mock-token-')) {
      // Handle mock token login
      setUser({
        id: 999,
        username: userData.username || 'Mock User',
        role: userData.rol || 'USER',
      });
      setToken(jwtToken);
      localStorage.setItem('token', jwtToken);
    } else {
      try {
        const decoded = jwtDecode(jwtToken);
        setUser({
          id: decoded.user_id,
          username: decoded.sub,
          role: decoded.role,
        });
        setToken(jwtToken);
        localStorage.setItem('token', jwtToken);
      } catch (error) {
        console.error('Token inválido al hacer login:', error);
      }
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
