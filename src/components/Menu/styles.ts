import {StyleSheet} from 'react-native';
import {colors} from '../../theme/styles';

const TabStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  nav: {},
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    // backgroundColor: colors.green,
    borderTopColor: colors['ghost-white'],
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  menuIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    color: colors.white,
    marginLeft: 10,
  },
});

export default TabStyles;
