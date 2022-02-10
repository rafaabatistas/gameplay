import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { GuildIcon } from './GuildIcon';

const props = {
  uri: 'https://pentagram-production.imgix.net/cc7fa9e7-bf44-4438-a132-6df2b9664660/EMO_LOL_02.jpg?rect=0%2C0%2C1440%2C1512&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=672'
};

storiesOf('GuildIcon', module)
  .add('With the edge', () => <GuildIcon {...props} />)
  .add('without the edge', () => <GuildIcon withBorder={false} {...props} />);
