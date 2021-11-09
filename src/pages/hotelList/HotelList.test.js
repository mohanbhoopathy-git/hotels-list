import { act } from 'react-dom/test-utils';

import { render } from '@testing-library/react';
import HotelsList from './HotelsList';

test('HotelsList - rendered successfully without crashing', () => {
  const { getByAltText } = render(<HotelsList />);;
});