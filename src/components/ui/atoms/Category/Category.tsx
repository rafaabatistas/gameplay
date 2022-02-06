import * as S from './Category.styles';

import React from 'react';
import { SvgProps } from 'react-native-svg';

export type CategoryProps = {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
  onPress?: () => void;
};

export const Category = ({ title, icon: Icon, checked = false, hasCheckBox = false, onPress }: CategoryProps) => (
  <S.Wrapper onPress={onPress} checked={checked}>
    <S.Background>
      <S.Content>
        {hasCheckBox && (
          <S.CheckedBox checked={checked}>
            <S.Checked checked={checked} />
          </S.CheckedBox>
        )}
        <Icon width={48} height={48} />
        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Background>
  </S.Wrapper>
);
