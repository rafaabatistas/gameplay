import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Container } from './Container';
import { Text } from 'react-native';

storiesOf('Container', module).add('Basic', () => (
  <Container>
    <Text style={{ color: '#fff' }}>Screen</Text>
  </Container>
));
