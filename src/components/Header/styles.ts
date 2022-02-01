import {StyleSheet} from 'react-native';
import {colors} from '../../theme/styles';

const HeaderStyles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  arrow: {
    color: colors.white,
    fontSize: 42,
    fontWeight: '500',
    lineHeight: 0,
    marginTop: 10,
  },
});

export default HeaderStyles;
