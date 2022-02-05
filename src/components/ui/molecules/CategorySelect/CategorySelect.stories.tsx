import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { CategorySelect, CategorySelectProps } from './CategorySelect';

const props: CategorySelectProps = {
  categorySelected: '1',
  setCategory: () => action('Handle category selected')
};

storiesOf('CategorySelect', module).add('Basic', () => <CategorySelect {...props} />);
