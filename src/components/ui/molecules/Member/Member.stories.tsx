import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Member, MemberProps } from './Member';

const props: MemberProps = {
  data: {
    id: '1',
    username: 'Rafael',
    avatar_url: 'https://github.com/rafaabatistas.png',
    status: 'online'
  }
};

storiesOf('Member', module).add('Basic', () => <Member {...props} />);
