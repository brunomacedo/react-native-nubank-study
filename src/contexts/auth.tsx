import React, {createContext, useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-sb-chiper';
import {ISignIn, signInService} from '../services/auth';

export interface IAuthContextData {
  signed: boolean;
  user: ISignIn['user'];
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<ISignIn['user']>(null);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    const {user: signedUser} = await signInService();
    setUser(signedUser);
    setLoading(false);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {!loading ? (
        children
      ) : (
        <View style={styles.container}>
          <Text color="green">Loading...</Text>
        </View>
      )}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
