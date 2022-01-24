import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ListHeader } from './ListHeader';

storiesOf('ListHeader', module).add('Basic', () => <ListHeader title="Partidas agendadas" totalNumberOfItems={2} />);
