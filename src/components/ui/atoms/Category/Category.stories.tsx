import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { action } from '@storybook/addon-actions';

import { Category } from './Category';

import RankedIcon from '../../../../../assets/svg/duel.svg';

const props = { title: 'Ranqueada', icon: RankedIcon };

storiesOf('Category', module)
  .add('Basic', () => <Category {...props} checked={false} onPress={action('Button onPress')} />)
  .add('Basic onPress', () => <Category {...props} checked={true} onPress={action('Button onPress')} />);
