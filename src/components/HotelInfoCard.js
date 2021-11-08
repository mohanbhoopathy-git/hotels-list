import React from 'react'

import ImageTile from './ImageTile';
import DetailsTile from './DetailsTile';

import styled from 'styled-components';

const Card = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Container = styled.div`
  border-bottom: 1px solid #000000;
  padding-bottom: 5px;
`;

/* 
  This component is like a container/index for the hotel info 
  ** will consolidate the list under the hood
 */

export default function HotelInfoCard({ hotels }) {
  return (
    <Container>
      {hotels.map(hotel => {
        const { property: { previewImage }, offer: { promotion } } = hotel;
        return (
          <Card key={hotel.id}>
            <ImageTile data={{ previewImage, promotion: promotion }} />
            <DetailsTile hotelDetails={hotel} />
          </Card>
        )
      })}
    </Container>
  )
}
