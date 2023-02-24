import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// interfaces
interface AuthContextData {
  user: null | FirebaseAuthTypes.User;
  setUser: Dispatch<SetStateAction<FirebaseAuthTypes.User | null>>;
  userDisplayName: null | String;
  setUserDisplayName: Dispatch<SetStateAction<String | null>>;
}

interface AuthContextProps {
  children: React.ReactNode;
}

// creates the context
const AuthContext = React.createContext({} as AuthContextData);

// the component that will serve as a provider
export function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<null | FirebaseAuthTypes.User>(null);
  const [userDisplayName, setUserDisplayName] = useState<null | String>(null);

  return (
    <AuthContext.Provider value={{ user, setUser, userDisplayName, setUserDisplayName }}>
      {children}
    </AuthContext.Provider>
  );
}

// a helper function to implement the "use" keyword to the context
export const useFirebaseAuth = () => {
  return useContext(AuthContext);
};
