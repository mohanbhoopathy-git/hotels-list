import React from 'react';

import Rating from '../components/Rating';
import styled from 'styled-components';

import constants from '../constants/constants.json';

const Details = styled.div`
  margin-top: 0px;
  margin-left: 20px;
  border-top: 1px solid #000000;
  padding-top: 10px;
  width: 100%;
  font-size: .8rem;

  .hotel-info {
    width: 100%;
    
    .name {
      max-width: 60%;
      font-size: 1.5rem;
    }
    .rating {
      margin-left: 20px;
    }
    .address {
      margin-top: 5px;
    }
  }

  .room-info {
    margin-top: 20px;
    float: left;

    .room-type a {
      color: #d71717;
    }
    .cancellation-type {
      margin-top: 50px;
      color: #275795;
    }
  }
  .price-info {
    margin-top: 0px;
    float: right;
    text-align: right;
    padding-right: 10px;

    div {
      margin-top: 0px;
    }
    .per-night{
      margin-top: 10px;
    }
    .save {
      margin-top: 20px;
      font-size: 1rem;
      color: #d71717;
    }

    div.price { {
      font-size: 2rem;

      .currency-symbol {
        font-size: .8rem;
        position: absolute;
        margin-top: 7px;
      }
      .amount {
        margin-left: 10px;
      }
    }
 }
`;

/* 
  This component will displays the pricing and room details of the hotel
  ** AppContainer will provide the rendering space
  ** Header component will be common for all routes/pages.
  ** HotelsList component is the single page of the app.
    This component will be replaced based on the route in future
 */
export default function DetailsTile(props) {
  const {
    id,
    property: { title, address, rating },
    offer: {
      name: offerName = '',
      cancellationOption: { cancellationType },
      displayPrice: { amount: displayAmount = 0, currency = 'AUD' },
      savings,
    }
  } = props.hotelDetails;
  const savingsAmount = (savings && savings.amount) || 0;

  return (
    <Details key={id}>
      <div className="hotel-info">
        <span className="name">{title}</span>
        <span className="rating"><Rating rating={rating} /></span>
        <div className="address">{address}</div>
      </div>

      <div className='room-info'>
        {/* eslint-disable-next-line */}
        <div className="room-type"><a href="#">{offerName}</a> </div>
        <div className="cancellation-type">{cancellationType === 'FREE_CANCELLATION' ? 'Free Cancellation' : ''}</div>
      </div>

      <div className="price-info">
        <div className="per-night"><strong>1</strong> {constants.nightTotal} ({currency})</div>
        <div className="price">
          <span className="currency-symbol">$</span>
          <span className="amount">{displayAmount}</span>
        </div>
        {savings && <div className="save">{constants.save} ${savingsAmount}~</div>}
      </div>
    </Details>
  )
}
