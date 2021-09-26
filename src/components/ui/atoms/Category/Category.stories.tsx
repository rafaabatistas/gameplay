import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Category } from './Category';
import RankedIcon from '../../assets/svg/ranked.svg';

const props = { title: 'Ranqueada', icon: RankedIcon };

storiesOf('Category', module).add('Basic', () => <Category {...props} />);
