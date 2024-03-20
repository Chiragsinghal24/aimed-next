import React, { createContext, FC, useContext, useState, useEffect } from "react";
import { account } from "@/lib/appwrite"

interface User {
  // Define your user properties here
}

interface AuthContextProps {
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children}:{
    children : React.ReactNode;
}) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userAsJson = localStorage.getItem("user");
    if (userAsJson) {
      const data = JSON.parse(userAsJson);
      setUser(data);
      setIsSignedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isSignedIn, setIsSignedIn, user, setUser } = useContext(AuthContext)!;
  const logout = async () => {
    localStorage.removeItem("user");
    await account.deleteSession();
    setUser(null);
    setIsSignedIn(false);
  };

  return { isSignedIn, setIsSignedIn, user, setUser, logout };
};

export default AuthProvider;
