import {StyleSheet} from 'react-native';
import {colors} from '../../theme/styles';

const ContentCardStyles = StyleSheet.create({
  card: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: 3,
    marginHorizontal: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 32,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  cardContentTitle: {
    fontSize: 14,
    color: colors['gray-300'],
  },
  cardContentDescription: {
    fontSize: 22,
    marginTop: 6,
    color: '#333',
  },
  cardFooter: {
    backgroundColor: colors['gray-25'],
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 3,
  },
  cardAnnotation: {
    fontSize: 12,
    color: '#333',
  },
});

export default ContentCardStyles;
