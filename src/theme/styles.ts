import {StyleSheet} from 'react-native';

type TColorsList =
  | 'bleu'
  | 'brand'
  | 'bright-yellow'
  | 'dark-blue'
  | 'ghost-white'
  | 'gray-100'
  | 'gray-200'
  | 'gray-25'
  | 'gray-300'
  | 'green'
  | 'jeans'
  | 'philippine'
  | 'white'
  | 'yankees';

type TColors = {
  [key in TColorsList]?: string;
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
  'gray-25': '#EBEDF1',
  'gray-300': '#8084A2',
  jeans: '#56B0F3',
  philippine: '#01834E',
  white: '#FFFFFF',
  yankees: '#2B2845',
};

export const primary = colors.brand;

const styles = StyleSheet.create({
  primary: {
    backgroundColor: primary,
    color: colors.white,
  },
  safearea: {
    flex: 1,
    backgroundColor: primary,
  },
  container: {
    flex: 1,
    backgroundColor: primary,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 120,
    height: 45,
  },
});

export default styles;
