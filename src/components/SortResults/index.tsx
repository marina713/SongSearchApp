import * as React from 'react';
import { setSortBy } from '~/state/songs/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getSortBy } from '~/state/songs/selectors';

import {
  Container,
  Title,
  SortItem,
  SortItemText,
  SortItemsContainer,
  SortIcon,
} from './styles';

type SortItemComponentProps = {
  sortBy: string;
};

const SORT_BY = ['Duration', 'Genre', 'Price'];

const SortItemComponent = ({ sortBy }: SortItemComponentProps) => {
  const dispatch = useDispatch();
  const sortByState = useSelector(getSortBy);

  const isSelected = sortByState.type === sortBy;
  const isDescending = sortByState.order === 'DESC';
  const isAscending = sortByState.order === 'ASC';
  const shouldOrderDesc = sortByState.type === '' || !isSelected;
  const source = isDescending
    ? require('~/assets/images/sort-descending.png')
    : require('~/assets/images/sort-ascending.png');

  const onPress = () => {
    const type = isAscending ? '' : sortBy;
    const order = shouldOrderDesc ? 'DESC' : isDescending ? 'ASC' : '';
    const nextValue = { type, order };
    dispatch(setSortBy(nextValue));
  };

  return (
    <SortItem isSelected={isSelected} onPress={onPress}>
      <SortItemText isSelected={isSelected}>{sortBy}</SortItemText>
      {isSelected ? <SortIcon source={source} /> : null}
    </SortItem>
  );
};

export const SortResults = () => (
  <Container>
    <Title>Sort by</Title>
    <SortItemsContainer>
      {SORT_BY.map(item => (
        <SortItemComponent key={item} sortBy={item} />
      ))}
    </SortItemsContainer>
  </Container>
);
