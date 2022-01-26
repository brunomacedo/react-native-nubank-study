import React, {createContext, useState} from 'react';
import {ISignIn, signInService} from '../services/auth';

export interface IAuthContextData {
  signed: boolean;
  user: ISignIn['user'];
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<ISignIn['user']>(null);

  const signIn = async () => {
    const {user: respUser} = await signInService();
    setUser(respUser);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
