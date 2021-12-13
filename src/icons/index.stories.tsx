import {text, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';

import {SVGIcon} from '~/icons';
import {generalIcons} from '~/constants/icons/general';
import {CenterView} from '~/components/container/center-view';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  min-width: 300px;
`;

const Text = styled.Text`
  margin-left: 10px;
`;

storiesOf('Icons', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('general', () => (
    <>
      {Object.keys(generalIcons).map(key => {
        const type = generalIcons[key];
        return (
          <Container key={type}>
            <SVGIcon
              type={type}
              colour={text('Color', '#333')}
              size={number('Size', 20)}
            />
            <Text>{type}</Text>
          </Container>
        );
      })}
    </>
  ));
