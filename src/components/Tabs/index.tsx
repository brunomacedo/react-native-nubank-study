import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {MenuItems} from '../../services/menu.services';
import TabStyles from './styles';

const Tabs: React.FC = () => {
  return (
    <View style={TabStyles.container}>
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
    </View>
  );
};

export default Tabs;
