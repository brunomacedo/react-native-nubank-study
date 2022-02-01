import {ColorValue, StyleSheet} from 'react-native';

type TColorsList =
  | 'bleu'
  | 'brand'
  | 'bright-yellow'
  | 'dark-blue'
  | 'ghost-white'
  | 'green'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'jeans'
  | 'philippine'
  | 'white'
  | 'yankees';

type TColors = {
  [key in TColorsList]?: ColorValue;
};

export const colors: TColors = {
  bleu: '#3584E0',
  brand: '#FF0136',
  'bright-yellow': '#FF9F26',
  'dark-blue': '#666A8F',
  'ghost-white': '#FAFBFC',
  green: '#00D27C',
  'gray-100': '#C6C9D8',
  'gray-200': '#A2A6BD',
  'gray-300': '#8084A2',
  jeans: '#56B0F3',
  philippine: '#01834E',
  white: '#FFFFFF',
  yankees: '#2B2845',
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.green,
  },
  container: {
    flex: 1,
    // padding: 16,
  },
  tinyLogo: {
    width: 120,
    height: 45,
  },
});

export default styles;
