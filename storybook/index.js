/* eslint-disable no-undef */
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeDecorator } from './ThemeDecorator';

import './rn-addons';

addDecorator(withKnobs);
addDecorator(ThemeDecorator);

configure(() => {
  // Atoms
  require('../src/components/ui/atoms/Avatar/Avatar.stories.tsx');
  require('../src/components/ui/atoms/Button/Button.stories.tsx');
  require('../src/components/ui/atoms/ButtonAdd/ButtonAdd.stories.tsx');
  require('../src/components/ui/atoms/Category/Category.stories.tsx');
  require('../src/components/ui/atoms/Container/Container.stories.tsx');
  require('../src/components/ui/atoms/GuildIcon/GuildIcon.stories.tsx');
  require('../src/components/ui/atoms/SmallInput/SmallInput.stories.tsx');
  require('../src/components/ui/atoms/TextArea/TextArea.stories.tsx');

  // Molecules
  require('../src/components/ui/molecules/CategorySelect/CategorySelect.stories.tsx');
  require('../src/components/ui/molecules/ListHeader/ListHeader.stories.tsx');
  require('../src/components/ui/molecules/Profile/Profile.stories.tsx');
  require('../src/components/ui/molecules/Appointment/Appointment.stories.tsx');
  require('../src/components/ui/molecules/Header/Header.stories.tsx');
  require('../src/components/ui/molecules/Member/Member.stories.tsx');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null
});

export default StorybookUIRoot;
