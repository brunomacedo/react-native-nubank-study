import React, {createContext} from 'react';
import {signInService} from '../services/auth';

export interface IAuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const signIn = async () => {
    const response = await signInService();
    console.log(response);
  };

  return (
    <AuthContext.Provider value={{signed: false, user: {}, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
