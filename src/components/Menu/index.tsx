import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {MenuItems} from '../../services/menu.services';
import MenuStyles from './styles';

const Menu: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={MenuStyles.container}>
      <View style={MenuStyles.nav}>
        {MenuItems.map(item => (
          <View key={item.key} style={MenuStyles.navItem}>
            <View style={MenuStyles.menuIcon}>{item.icon}</View>
            <Text numberOfLines={2} style={MenuStyles.menuText}>
              {item.text}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Menu;
