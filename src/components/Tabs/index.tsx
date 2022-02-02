import React from 'react';
import {Animated, ScrollView, Text, View} from 'react-native';
import {MenuItems} from '../../services/menu.services';
import TabStyles from './styles';

interface IProps {
  translateY: Animated.Value;
}

const Tabs: React.FC<IProps> = ({translateY}) => {
  return (
    <Animated.View
      style={{
        ...TabStyles.container,
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <ScrollView
        contentContainerStyle={TabStyles.tabScroll}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {MenuItems.map(item => (
          <View key={item.key} style={TabStyles.tabItem}>
            {item.icon}
            <Text numberOfLines={2} style={TabStyles.tabText}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default Tabs;
