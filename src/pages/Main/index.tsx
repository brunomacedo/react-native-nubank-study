import React from 'react';
import {View} from 'react-native';
import ContentCard from '../../components/ContentCard';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';
import styles from '../../theme/styles';
import MainStyles from './styles';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={MainStyles.content}>
        <Menu />
        <ContentCard />
      </View>

      <Tabs />
    </View>
  );
};

export default Main;
