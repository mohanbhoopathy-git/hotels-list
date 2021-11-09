import React from 'react';

import styled from 'styled-components';
import constants from '../../constants/constants.json';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  margin-top: 20px;
  padding: 5px;
`;

const SortBy = styled.div`
  select {
    margin-left: 5px;
  }
`;

/* 
  Component to render the sorting section for the hotel listing
 */
export default function SortSection({ count = 0, sortBy = constants.highToLow, setSortBy }) {

  return (
    <Container>
      <span date-testid="total-hotels">{count} {constants.hotelsIn} <strong>Sydney</strong></span>
      <SortBy>
        <span date-test-id="sortby-label"><strong>{constants.sortBy}</strong></span>
        <select date-test-id="sortby-select" name="sort-by" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value={constants.highToLow}>{constants.highToLow}</option>
          <option value={constants.lowToHigh}>{constants.lowToHigh}</option>
        </select>
      </SortBy>
    </Container >
  )
}
