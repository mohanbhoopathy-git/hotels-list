import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  margin-top: 20px;
  padding: 5px;
`;

const SortBy = styled.div`
  .select {
    margin-left: 5px;
  }
`;

export default function SortSection({ count, sortBy, setSortBy }) {

  return (
    <Container>
      <span>{count} Hotels in <strong>Sydney</strong></span>
      <SortBy>
        <span><strong>Sort By</strong></span>
        <select className="select" name="sort-by" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="high-low">high-low</option>
          <option value="low-high">low-high</option>
        </select>
      </SortBy>
    </Container >
  )
}
