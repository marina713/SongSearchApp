import * as React from 'react';

import {Container, ButtonText} from './styles';

export type Props = {
  text: string;
  onPress: () => void;
};

export const Button = React.memo(({text, onPress}: Props) => (
  <Container onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </Container>
));
