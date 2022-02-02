import React from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {MenuItems} from '../../services/menu.services';
import MenuStyles from './styles';

interface IProps {
  translateY: Animated.Value;
}

const Menu: React.FC<IProps> = ({translateY}) => {
  return (
    <Animated.ScrollView
      contentContainerStyle={MenuStyles.container}
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
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
    </Animated.ScrollView>
  );
};

export default Menu;
