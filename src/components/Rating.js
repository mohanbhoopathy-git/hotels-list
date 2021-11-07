import * as React from "react";
import Rating from "@mui/material/Rating";
import CircleIcon from '@mui/icons-material/Circle'; import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export default function CustomizedRating(props) {
  const { ratingValue = 0, ratingType = 'star' } = props.rating;
  return (
    ratingType === 'star' ?
      <Rating name="star-rating"
        defaultValue={ratingValue}
        precision={0.1}
        readOnly
      />
      :
      <Rating
        name="self-rating"
        defaultValue={ratingValue}
        precision={0.1}
        icon={<CircleIcon fontSize="inherit" />}
        emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
        size="small"
        readOnly
      />
  );
}