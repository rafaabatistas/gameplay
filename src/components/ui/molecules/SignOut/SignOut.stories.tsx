import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { SignOut } from './SignOut';

const props = {
  handleCancel: () => console.log('hello world'),
  handleSignOut: () => console.log('hello world')
};

storiesOf('SignOut', module).add('Basic', () => <SignOut {...props} />);
