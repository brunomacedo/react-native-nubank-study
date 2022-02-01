import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../theme/styles';

export const IconOffers = () => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <Path
      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
      stroke={String(colors.white)}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M19.9375 12.0625L12.0625 19.9375"
      stroke={String(colors.white)}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M13.1562 14.6875C14.0019 14.6875 14.6875 14.0019 14.6875 13.1562C14.6875 12.3106 14.0019 11.625 13.1562 11.625C12.3106 11.625 11.625 12.3106 11.625 13.1562C11.625 14.0019 12.3106 14.6875 13.1562 14.6875Z"
      stroke={String(colors.white)}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M18.8438 20.375C19.6894 20.375 20.375 19.6894 20.375 18.8438C20.375 17.9981 19.6894 17.3125 18.8438 17.3125C17.9981 17.3125 17.3125 17.9981 17.3125 18.8438C17.3125 19.6894 17.9981 20.375 18.8438 20.375Z"
      stroke={String(colors.white)}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
