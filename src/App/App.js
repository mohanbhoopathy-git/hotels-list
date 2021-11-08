import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import HotelsList from '../pages/hotelList/HotelsList';

/* 
  CSS in JS approach with styled-component
*/
const AppContainer = styled.div`
  margin: 30px 20px; 
`;

/* 
  Root component of the Qantas app
  ** AppContainer will provide the rendering space
  ** Header component will be common for all routes/pages.
  ** HotelsList component is the single page of the app.
    This component will be replaced based on the route in future
 */
function App() {
  return (
    <AppContainer>
      <Header />
      <HotelsList />
    </AppContainer>
  );
}

export default App;
