import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    const saved = localStorage.getItem("user");

    return saved ? JSON.parse(saved) : null;

  });

  function login(username, password) {

    if (username === "admin" && password === "admin123") {

      const admin = {

        username: "admin",

        role: "Administrador"

      };

      localStorage.setItem("user", JSON.stringify(admin));

      setUser(admin);

      return true;

    }

    if (username === "cliente" && password === "cliente123") {

      const client = {

        username: "cliente",

        role: "Cliente"

      };

      localStorage.setItem("user", JSON.stringify(client));

      setUser(client);

      return true;

    }

    return false;

  }

  function logout() {

    localStorage.removeItem("user");

    setUser(null);

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(AuthContext);

}