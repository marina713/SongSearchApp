import * as React from 'react';
import { setSortBy } from '~/state/songs/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getSortBy } from '~/state/songs/selectors'

import { Container, Title, SortItem, SortItemText, SortItemsContainer, SortIcon } from './styles';
import { SortByType } from '~/state/songs/types';

type SortItemComponentProps = {
    sortBy: SortByType;
}

const SORT_BY = ['Duration', 'Genre', 'Price'];

const SortItemComponent = ({ sortBy }: SortItemComponentProps) => {
    const dispatch = useDispatch();
    const sortByState = useSelector(getSortBy);

    const isSelected = sortByState.type === sortBy;
    const source = sortByState.order === 'DESC' ?
        require('~/assets/images/sort-descending.png')
        : require('~/assets/images/sort-ascending.png');

    const onPress = () => {
        const nextValue = sortByState.type === '' || !isSelected ?
            { type: sortBy, order: 'DESC' }
            : sortByState.order === 'DESC' ?
                { type: sortBy, order: 'ASC' } : { type: '', order: '' };
        dispatch(setSortBy(nextValue))
    }

    return (
        <SortItem isSelected={isSelected} onPress={onPress}>
            <SortItemText isSelected={isSelected}>{sortBy}</SortItemText>
            {isSelected ? <SortIcon source={source} /> : null}
        </SortItem>
    )
}

export const SortResults = () => (
    <Container>
        <Title>Sort by</Title>
        <SortItemsContainer>
            {SORT_BY.map(item => <SortItemComponent sortBy={item} />)}
        </SortItemsContainer>
    </Container>
);
