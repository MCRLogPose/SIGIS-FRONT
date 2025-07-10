// src/hooks/auth/useIsUsuario.js

import { useEffect, useState } from "react";

const useIsUsuario = () => {
  const [isUsuario, setIsUsuario] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.rol === 'Usuario') {
      setIsUsuario(true);
    }
  }, []);

  return isUsuario;
};

export default useIsUsuario;