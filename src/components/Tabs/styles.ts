import {StyleSheet} from 'react-native';
import {colors} from '../../theme/styles';

const TabStyles = StyleSheet.create({
  container: {
    height: 80 + 32,
    // marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  tabScroll: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 6,
  },
  tabItem: {
    width: 80,
    height: '100%',
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: `${String(colors.white)}40`,
  },
  tabText: {
    fontSize: 13,
    color: colors.white,
  },
});

export default TabStyles;
