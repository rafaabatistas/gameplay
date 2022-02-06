import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Appointment } from './Appointment';

const props = {
  data: {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  }
};

storiesOf('Appointment', module).add('Basic', () => <Appointment {...props} />);
