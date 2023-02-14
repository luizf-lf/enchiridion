import React, { useContext, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

// interfaces
interface AuthContextData {
  user: FirebaseAuthTypes.User | null;
  createUser: () => Promise<void>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthContextProps {
  children: React.ReactNode;
}

// creates the context
const AuthContext = React.createContext({} as AuthContextData);

// the component that will serve as a provider
export function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState(null);

  // TODO: Implement
  const createUser = async () => {
    return;
  };
  // TODO: Implement
  const login = async () => {
    return;
  };
  // TODO: Implement
  const logout = async () => {
    return;
  };

  return (
    <AuthContext.Provider value={{ user, createUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// a helper function to implement the "use" keyword to the context
export const useFirebaseAuth = () => {
  return useContext(AuthContext);
};
