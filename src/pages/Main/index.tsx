import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import styles from '../../theme/styles';

const Main: React.FC = () => {
  return (
    <ScrollView
      style={styles.scroll}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header />
        <Tabs />
      </View>
    </ScrollView>
  );
};

export default Main;
