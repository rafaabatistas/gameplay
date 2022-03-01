import * as S from './Profile.styles';

import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../../../hooks/auth';

import { SignOut } from '../SignOut/SignOut';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { ModalView } from '../../atoms/ModalView/ModalView';

export const Profile = () => {
  const [openGuildModal, setOpenGuildModal] = useState(false);

  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    setOpenGuildModal(false);
    signOut();
  };

  return (
    <S.Container>
      <RectButton onPress={() => setOpenGuildModal(true)}>
        <Avatar image={user.avatar} />
      </RectButton>
      <S.Box>
        <S.User>
          <S.Greeting>Olá, </S.Greeting>
          <S.UserName>{user.firstName}</S.UserName>
        </S.User>
        <S.Message>Hoje é dia de vitória</S.Message>
      </S.Box>
      <ModalView visible={openGuildModal} closeModal={() => setOpenGuildModal(false)}>
        <SignOut handleCancel={setOpenGuildModal} handleSignOut={handleSignOut} />
      </ModalView>
    </S.Container>
  );
};
