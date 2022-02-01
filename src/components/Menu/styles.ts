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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: `${String(colors.white)}20`,
    padding: 8,
    marginTop: 16,
  },
  buttonText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
  },
});

export default TabStyles;
