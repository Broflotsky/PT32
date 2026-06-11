"use client";

import { IUserSession } from "@/interfaces/user.interface";
import { createContext, useContext, useEffect, useState } from "react";

//1/ [TS] Declarar la interfaz que va a tipar mi contexto. (estados, funciones, reducers, etc)

interface AuthContextProps {
  dataUser: IUserSession | null;
  setDataUser: (data: IUserSession | null) => void;
  logout: () => void;
}

// const [dataUser, setDataUser] = useState()
// dataUser = true;

// 2- Determinar los valores iniciales, y ademas SE CREA el contexto con createContext [NO SE TRABAJA LA LOGICA, UNICAMENTE VALORES INICIALES Y CREACION]

export const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
});

// Declarar la interfaz para el provider

interface AuthProviderProps {
  children: React.ReactNode;
}

// Crear el provider, AQUI SI VA LA LOGICA, METODOS, ESTADOS, USEEFFECT Y TODO LO NECESARIO PARA MI CONTEXT Y PROVIDER.
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<IUserSession | null>(() => {
    //!PREVENCION A UN SSR
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("userSession");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    } else {
      localStorage.removeItem("userSession");
    }
  }, [dataUser]);

  const logout = () => {
    setDataUser(null);
  };

  return (
    <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
