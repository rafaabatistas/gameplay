import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { SmallInput } from './SmallInput';

storiesOf('SmallInput', module).add('Basic', () => <SmallInput maxLength={2} />);
