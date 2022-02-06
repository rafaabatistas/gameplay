import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Header, HeaderProps } from './Header';

const props: HeaderProps = {
  title: 'Lendários'
};

storiesOf('Header', module).add('Basic', () => <Header {...props} />);
