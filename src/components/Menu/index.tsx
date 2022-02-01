import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
        <TouchableOpacity
          style={MenuStyles.button}
          onPress={() => console.warn('Sign out')}>
          <Text style={MenuStyles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Menu;
