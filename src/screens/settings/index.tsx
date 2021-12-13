import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getQuote as getQuoteAction} from '~/state/quote/actions';
import {getQuote} from '~/state/quote/selectors';

import {Container, HeaderText, Quote} from './styles';

type Props = {
  quote: string;
  isLoading: boolean;
};

export const SettingsComponent = React.memo(({quote, isLoading}: Props) => (
  <Container>
    <HeaderText>Quote of the day:</HeaderText>
    {isLoading ? <ActivityIndicator /> : <Quote>{quote}</Quote>}
  </Container>
));

export const Settings = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const quote = useSelector(getQuote);
  const dispatch = useDispatch();

  const onSuccess = () => setIsLoading(false);
  const onError = () => setIsLoading(false);

  React.useEffect(() => {
    setIsLoading(true);
    dispatch(getQuoteAction({onSuccess, onError}));
  }, [dispatch]);

  return <SettingsComponent quote={quote} isLoading={isLoading} />;
};
