import React from 'react';
import {ChatText, ShoppingBagOpen, Tag, UserList} from 'phosphor-react-native';
import {IconStore} from '../components/Icons/store';
import {colors} from '../theme/styles';

export const MenuItems = [
  {
    key: 1,
    icon: <IconStore size={32} color={colors.white} />,
    text: 'Loja',
  },
  {
    key: 2,
    icon: <ShoppingBagOpen size={26} color={colors.white} />,
    text: 'Ofertas',
  },
  {
    key: 3,
    icon: <Tag size={26} color={colors.white} />,
    text: 'Cupons',
  },
  {
    key: 4,
    icon: <ChatText size={26} color={colors.white} />,
    text: 'Ajuda',
  },
  {
    key: 5,
    icon: <UserList size={26} color={colors.white} />,
    text: 'Conta',
  },
];
