import React, { createContext, useState,useEffect } from "react";

// Crear el contexto de usuario
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    // Obtener el usuario almacenado en el localStorage al cargar la página
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      // Si se encuentra un usuario en el localStorage, establecerlo en el estado
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    // Guardar el usuario en el localStorage cuando cambie el estado
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

