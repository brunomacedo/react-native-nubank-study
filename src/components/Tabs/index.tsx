import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import TabStyles from './styles';

import {IconStore} from '../Icons/store';
import {IconOffers} from '../Icons/offers';

const TabItems = [
  {
    key: 1,
    icon: <IconStore />,
    text: 'Loja',
  },
  {
    key: 2,
    icon: <IconOffers />,
    text: 'Ofertas',
  },
  {
    key: 3,
    icon: <IconStore />,
    text: 'Cupons',
  },
  {
    key: 4,
    icon: <IconOffers />,
    text: 'Ajuda',
  },
  {
    key: 5,
    icon: <IconStore />,
    text: 'Conta',
  },
];

const Tabs: React.FC = () => {
  return (
    <View style={TabStyles.container}>
      <ScrollView
        contentContainerStyle={TabStyles.tabScroll}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {TabItems.map(item => (
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
