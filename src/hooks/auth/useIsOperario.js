// src/hooks/auth/useIsOperario.js

import { useEffect, useState } from "react";

const useIsOperator = () => {
  const [isOperator, setIsOperator] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.rol === 'operario') {
      setIsOperator(true);
    }
  }, []);

  return isOperator;
};

export default useIsOperator;