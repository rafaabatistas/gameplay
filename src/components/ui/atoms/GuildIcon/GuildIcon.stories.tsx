import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { GuildIcon } from './GuildIcon';

const props = {
  uri: 'https://w7.pngwing.com/pngs/942/98/png-transparent-discord-computer-icons-teamspeak-computer-servers-others-miscellaneous-blue-smiley.png'
};

storiesOf('GuildIcon', module).add('Basic', () => <GuildIcon {...props} />);
