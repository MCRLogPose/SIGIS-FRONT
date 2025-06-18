// hooks/useIsAdmin.js
import { useEffect, useState } from "react";
import axios from "axios";

const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.rol === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return isAdmin;
};

export default useIsAdmin;