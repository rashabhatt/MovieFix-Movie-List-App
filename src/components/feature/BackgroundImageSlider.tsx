import React, { useState } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

interface BackgroundOverlaySliderProps {
  imageUrls: string[]
  selectedIndex: number
  onChangeIndex: (index: number) => void
}

const BackgroundOverlaySlider: React.FC<BackgroundOverlaySliderProps> = ({
  imageUrls,
  selectedIndex,
  onChangeIndex,
}) => {
  const [sliderIndex, setSliderIndex] = useState(selectedIndex)

  const handlePrevious = () => {
    const newIndex = sliderIndex === 0 ? imageUrls.length - 1 : sliderIndex - 1
    setSliderIndex(newIndex)
    onChangeIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = sliderIndex === imageUrls.length - 1 ? 0 : sliderIndex + 1
    setSliderIndex(newIndex)
    onChangeIndex(newIndex)
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {imageUrls.map((url, index) => (
        // <Box
        //   key={url}
        //   sx={{
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     bottom: 0,
        //     zIndex: sliderIndex === index ? 0 : -1,
        //     opacity: sliderIndex === index ? 1 : 0,
        //     transition: 'opacity 0.5s ease',
        //     backgroundImage: `url(${url})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     maxWidth: '500%'
        //   }}
        // >
        //   <Box
        //     sx={{
        //       position: 'absolute',
        //       top: 0,
        //       left: 0,
        //       right: 0,
        //       bottom: 0,
        //       backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //     }}
        //   />
        //</Box>
        <>
          <img
            decoding='async'
            className='img-slide active'
            src='backgroundImage: `url(${url})`'
          ></img>
          <img decoding='async' className='img-slide' src='backgroundImage: `url(${url})`'></img>
          <img decoding='async' className='img-slide' src='backgroundImage: `url(${url})`'></img>
          <img decoding='async' className='img-slide' src='backgroundImage: `url(${url})`'></img>
          <img decoding='async' className='img-slide' src='5.jpg'></img>
          <div className='content active'></div>
        </>
      ))}
      <IconButton
        sx={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)' }}
        onClick={handlePrevious}
      >
        <ArrowBackIos sx={{ color: 'white' }} />
      </IconButton>
      <IconButton
        sx={{ position: 'absolute', top: '50%', right: '16px', transform: 'translateY(-50%)' }}
        onClick={handleNext}
      >
        <ArrowForwardIos sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  )
}

export default BackgroundOverlaySlider
