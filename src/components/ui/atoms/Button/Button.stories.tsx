import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from './Button';

storiesOf('Button', module).add('Basic', () => (
  <Button withIcon size="medium">
    Entrar com Discord
  </Button>
));
