import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const InternetContext = createContext();

// Creamos el proveedor del contexto
export const InternetContextProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Verificar la conexión a Internet
    const checkInternetConnection = () => {
      // Aquí puedes implementar la lógica para verificar la conexión a Internet
      const onlineStatus = navigator.onLine;
      setIsConnected(onlineStatus);
    };

    // Verificar la conexión al cargar la aplicación y cada vez que cambie el estado de la conexión
    checkInternetConnection();
    window.addEventListener("online", checkInternetConnection);
    window.addEventListener("offline", checkInternetConnection);

    // Limpiamos los event listeners al desmontar el componente
    return () => {
      window.removeEventListener("online", checkInternetConnection);
      window.removeEventListener("offline", checkInternetConnection);
    };
  }, []);

  // Proveemos el estado de conexión y los componentes hijos
  return (
    <InternetContext.Provider value={{ isConnected }}>
      {children}
    </InternetContext.Provider>
  );
};

export default InternetContextProvider; 