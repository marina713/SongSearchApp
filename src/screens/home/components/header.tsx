import * as React from 'react';

import { Container, TextInput, Title } from '../styles';

type HomeHeaderProps = {
  onSubmitEditing: (text: string) => void;
  onChange: (text: string) => void;
};

export const HomeHeaderComponent = React.memo(
  ({ onSubmitEditing, onChange }: HomeHeaderProps) => {
    return (
      <Container>
        <Title>Music search</Title>
        <TextInput
          onSubmitEditing={e => onSubmitEditing(e.nativeEvent.text)}
          selectTextOnFocus
          onChange={e => onChange(e.nativeEvent.text)}
          clearButtonMode="while-editing"
          returnKeyType="search"
        />
      </Container>
    );
  },
);
