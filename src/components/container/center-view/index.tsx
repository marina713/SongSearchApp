import React from 'react';
import {Container} from './styles';

type Props = {
  children: React.ReactNode;
};

export const CenterView = React.memo(({children}: Props) => {
  return <Container>{children}</Container>;
});
