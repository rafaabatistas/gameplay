import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { TextArea } from './TextArea';

storiesOf('TextArea', module).add('Basic', () => (
  <TextArea maxLength={100} multiline numberOfLines={5} autoCorrect={false} />
));
