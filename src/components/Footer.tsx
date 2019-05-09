import * as React from 'react';
import styled from '@emotion/styled';
import FilterLink from '../containers/FilterLink';
import {
  showAll,
  showCompleted,
  showActive,
} from '../modules/visibilityFilter';

const component: React.SFC = () => {
  return (
    <div>
      <Span>Show: </Span>
      <FilterLink filter={showAll()}>All</FilterLink>
      <FilterLink filter={showActive()}>Active</FilterLink>
      <FilterLink filter={showCompleted()}>Completed</FilterLink>
    </div>
  );
};

const Span = styled.span`
  font-size: 30px;
`;

export default component;
