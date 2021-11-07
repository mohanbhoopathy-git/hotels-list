import React from 'react'

import ImageTile from './ImageTile';
import DetailsTile from './DetailsTile';

import styled from 'styled-components';

const Card = styled.div`
  margin-top: 10px;
  display: flex;
`;

export default function HotelInfoCard({ hotels }) {
  return (
    <>
      {hotels.map(hotel => {
        const { property: { previewImage }, offer: { promotion } } = hotel;
        return (
          <Card key={hotel.id}>
            <ImageTile data={{ previewImage, promotion: promotion }} />
            <DetailsTile hotelDetails={hotel} />
          </Card>
        )
      })}
      <hr />
    </>

  )
}
