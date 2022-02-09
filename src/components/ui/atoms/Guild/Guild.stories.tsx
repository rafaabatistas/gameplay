import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Guild } from './Guild';

const props = {
  data: {
    id: '1',
    name: 'Lendários',
    subtitle: 'Bora queimar tudo',
    icon: 'https://w7.pngwing.com/pngs/942/98/png-transparent-discord-computer-icons-teamspeak-computer-servers-others-miscellaneous-blue-smiley.png'
  },
  handleGuildSelect: () => console.log('onPress')
};

storiesOf('Guild', module).add('Basic', () => <Guild {...props} />);
