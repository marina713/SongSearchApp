import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setCounter} from '~/state/counter/actions';
import {getValue} from '~/state/counter/selectors';
import {Button} from '~/components/button';

import {Container, CounterText, Link, LinkText} from './styles';

type Props = {
  value: number;
  onPress: (arg0: number) => void;
  onLinkPress: () => void;
};

export const HomeComponent = React.memo(
  ({value, onPress, onLinkPress}: Props) => (
    <Container>
      <Button text="Add" onPress={() => onPress(1)} />
      <Button text="Subtract" onPress={() => onPress(-1)} />
      <CounterText>{value}</CounterText>

      <Link onPress={onLinkPress}>
        <LinkText>Go to settings</LinkText>
      </Link>
    </Container>
  ),
);

export const Home = ({navigation}: any) => {
  const value = useSelector(getValue);
  const dispatch = useDispatch();

  const onPress = React.useCallback(
    (newValue: number) => {
      dispatch(setCounter(newValue));
    },
    [dispatch],
  );

  const onLinkPress = React.useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  return (
    <HomeComponent value={value} onPress={onPress} onLinkPress={onLinkPress} />
  );
};
