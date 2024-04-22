import React from 'react';
import { Rating, RatingProps } from '@mui/material';
import { styled } from '@mui/system';

const CustomRating = styled(Rating)(({}) => ({
  '& .MuiRating-iconFilled': {
    color: 'black',
  },
}));

interface StarRatingProps extends RatingProps {
  popularity: number;
}

const StarRating: React.FC<StarRatingProps> = ({ popularity, ...rest }) => {
  const rating = popularity / 100; 
  return (
    <CustomRating
      value={rating}
      max={5}
      precision={0.5}
      readOnly
      {...rest}
    />
  );
};

export default StarRating;
