// src/hooks/auth/useIsAdmin.js

import { useEffect, useState } from "react";

const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.rol === 'usuario') {
      setIsAdmin(true);
    }
  }, []);

  return isAdmin;
};

export default useIsAdmin;