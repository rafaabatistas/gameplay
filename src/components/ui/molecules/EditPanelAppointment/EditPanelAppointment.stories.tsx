import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { EditPanelAppointment } from './EditPanelAppointment';

const props = {
  exitEditMode: () => console.log('Sair do modo de edição'),
  numberAppointmentsSelected: 5
};

storiesOf('EditPanelAppointment', module).add('Basic', () => <EditPanelAppointment {...props} />);
