import { render } from '@testing-library/react';
import App from './App';

test('Qantas app rendered successfully without crashing', () => {
  const { getByAltText } = render(<App />);;
  const image = getByAltText('qantas logo');
  expect(image.src).toContain('qantas-logo');
});
