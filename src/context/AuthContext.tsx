import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// interfaces
interface AuthContextData {
  user: null | FirebaseAuthTypes.User;
  setUser: any;
}

interface AuthContextProps {
  children: React.ReactNode;
}

// creates the context
const AuthContext = React.createContext({} as AuthContextData);

// the component that will serve as a provider
export function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<null | FirebaseAuthTypes.User>(null);

  // TODO: Move to screen
  const createUser = async (email: string, password: string) => {
    try {
      const createdUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      setUser(createdUser.user);
    } catch (error) {
      console.error(`Unable to create user with e-mail: ${error}`);
    }
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
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// a helper function to implement the "use" keyword to the context
export const useFirebaseAuth = () => {
  return useContext(AuthContext);
};
