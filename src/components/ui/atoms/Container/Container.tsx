import * as S from './Container.styles';

import React, { ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => <S.Container>{children}</S.Container>;
