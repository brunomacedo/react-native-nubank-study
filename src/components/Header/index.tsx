import React from 'react';
import {Image, Text, View} from 'react-native';
import HeaderStyles from './styles';
import styles from '../../theme/styles';

const Header: React.FC = () => {
  return (
    <View style={HeaderStyles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/images/logo/Chiper.png')}
      />
      <Text style={HeaderStyles.arrow}>ˇ</Text>
    </View>
  );
};

export default Header;
