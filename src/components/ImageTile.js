import React from 'react'
import { useImage } from 'react-image'
import styled from 'styled-components';

// import { getImage } from '../services/getImage';

const ImgTile = styled.span`
  width: 230px;
  height: 160px;
  .badge {
    position: absolute;
    background-color: #ffffff;
    margin-top: 10px;
    margin-left: .5px;
    padding: 5px;
    color: red;
    display: inline;
  }
`
export default function ImageTile(props) {
  const { url = '', caption = 'Hotel' } = props.data.previewImage;
  const { title = '' } = props.data.promotion;

  return (
    <ImgTile>
      <div className='badge'>{title}</div>
      <img src={url} alt={caption} height="160px" />
    </ImgTile>
  )
}
