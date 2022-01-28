import React from 'react';
import {Button} from 'react-native-sb-chiper';
import {View, StyleSheet} from 'react-native';
import useAuth from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Button variant="primary" label="Sign out" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
