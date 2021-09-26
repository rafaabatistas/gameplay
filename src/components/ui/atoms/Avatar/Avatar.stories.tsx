import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Avatar } from './Avatar';

storiesOf('Avatar', module).add('Basic', () => <Avatar image="https://github.com/rafaabatistas.png" />);
