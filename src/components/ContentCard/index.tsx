import React from 'react';
import {CurrencyDollar, Eye} from 'phosphor-react-native';
import {Text, View} from 'react-native';
import ContentCardStyles from './styles';
import {primary} from '../../theme/styles';

const ContentCard: React.FC = () => {
  return (
    <>
      <View style={ContentCardStyles.cardHeader}>
        <CurrencyDollar size={32} color={primary} />
        <Eye size={32} color={primary} />
      </View>
      <View style={ContentCardStyles.cardContent}>
        <Text numberOfLines={2} style={ContentCardStyles.cardContentTitle}>
          Lorem ipsum dolor sit amet consectetur
        </Text>
        <Text
          numberOfLines={4}
          style={ContentCardStyles.cardContentDescription}>
          Lorem ipsum dolor sit, amet consectetur
        </Text>
      </View>
      <View style={ContentCardStyles.cardFooter}>
        <Text numberOfLines={2} style={ContentCardStyles.cardAnnotation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          totam rem aperiam a saepe odio vel
        </Text>
      </View>
    </>
  );
};

export default ContentCard;
