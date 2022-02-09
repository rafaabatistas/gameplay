import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { Button } from '../Button/Button';
import { ModalView } from './ModalView';

const ComponentModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button handle={() => setOpenModal(true)} size="medium">
        Abrir
      </Button>
      <ModalView visible={openModal}>
        <Text style={{ color: '#fff' }}>Hello World!</Text>
        <Button handle={() => setOpenModal(false)} size="medium">
          Fechar
        </Button>
      </ModalView>
    </>
  );
};

storiesOf('ModalView', module).add('Basic', () => <ComponentModal />);
