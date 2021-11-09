import React from 'react';
import { render } from '@testing-library/react';
import SortSection from './SortSection';
import { screen } from '@testing-library/react';


it('should correctly set default option', () => {
  const onChange = (e) => { console.log(e) };
  render(<SortSection count={5} sortBy={'high-low'} setSortBy={onChange} />);
  expect(screen.getByRole('option', { name: 'high-low' }).selected).toBe(true)
});

it('other option should be falsy', () => {
  const onChange = (e) => { console.log(e) };
  render(<SortSection count={5} sortBy={'low-high'} setSortBy={onChange} />);
  expect(screen.getByRole('option', { name: 'high-low' }).selected).toBe(false)
});
it('other option should be true', () => {
  const onChange = (e) => { console.log(e) };
  render(<SortSection count={5} sortBy={'low-high'} setSortBy={onChange} />);
  expect(screen.getByRole('option', { name: 'low-high' }).selected).toBe(true)
});
