import React, { useState, useEffect } from 'react';

import _sortBy from 'lodash.sortby'
import SortSection from '../components/SortSection';
import HotelInfoCard from '../components/HotelInfoCard';

import { getAllHotels } from '../services/hotelServices';

export default function HotelsList() {
  const [hotelsList, setHotelsList] = useState(null);
  const [sortBy, setSortBy] = useState('high-low')

  const getSortedList = (list) => {
    const sortedList = _sortBy(list, [function (o) { return o.offer.displayPrice.amount; }]);
    return sortedList;
  }

  useEffect(() => {
    getAllHotels().then(result => {
      setHotelsList(getSortedList(result).reverse());
    })
  }, []);

  const sortRecords = (sortByOrder) => {
    console.log('sorting in progress - ', sortBy);
    setHotelsList(hotelsList && hotelsList.length && hotelsList.reverse());
    setSortBy(sortByOrder);
  }

  return hotelsList && hotelsList.length ? <div>
    <SortSection sortBy={sortBy} count={hotelsList.length} setSortBy={sortRecords} />
    <HotelInfoCard hotels={hotelsList} />
  </div> : ''

}
