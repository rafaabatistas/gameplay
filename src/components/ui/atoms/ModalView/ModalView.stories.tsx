import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../Button/Button';
import { ModalView } from './ModalView';

const ComponentModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button handle={() => setOpenModal(true)} size="medium">
          Abrir
        </Button>
      </View>
      <ModalView visible={openModal} closeModal={() => setOpenModal(false)}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', marginBottom: 25 }}>Hello World!</Text>
          <Button handle={() => setOpenModal(false)} size="medium">
            Fechar
          </Button>
        </View>
      </ModalView>
    </>
  );
};

storiesOf('ModalView', module).add('Basic', () => <ComponentModal />);
