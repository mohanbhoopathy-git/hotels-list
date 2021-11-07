import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import HotelsList from '../pages/HotelsList';

const AppContainer = styled.div`
  margin: 30px 20px; 
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <HotelsList />
    </AppContainer>
  );
}

export default App;
