import React, { useState, useEffect } from 'react';

import SortSection from '../../components/SortSection';
import HotelInfoCard from '../../components/HotelInfoCard';

import { getAllHotels } from '../../services/hotelServices';
import { getSortedList } from '../../utils/utils';

export default function HotelsList() {
  const [hotelsList, setHotelsList] = useState(null);
  const [sortBy, setSortBy] = useState('high-low')

  useEffect(() => {
    getAllHotels().then(result => {
      const sorted = result.length ? getSortedList(result, 'offer.displayPrice.amount') : [];
      setHotelsList(sorted.reverse());
    })
  }, []);

  const sortRecords = (sortByOrder) => {
    setHotelsList(hotelsList && hotelsList.length && hotelsList.reverse());
    setSortBy(sortByOrder);
  }

  return hotelsList && hotelsList.length ? <div>
    <SortSection sortBy={sortBy} count={hotelsList.length} setSortBy={sortRecords} />
    <HotelInfoCard hotels={hotelsList} />
  </div> : ''

}
