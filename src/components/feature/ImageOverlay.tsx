import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { ImageBoxStyle, ImageStyle, OverlayBoxStyle } from '../../styles/ImageOverlayStyle'

export interface BackgroundOverlayImageProps {
  imageUrl: string
  overlayText: string
  textColor?: string
  textVariant?: string
  children?: ReactNode
}

const BackgroundOverlayImage = (props: BackgroundOverlayImageProps) => {
  const { imageUrl, overlayText, textColor = 'white' } = props
  return (
    <Box sx={ImageBoxStyle}>
      <img src={imageUrl} alt='Background' style={ImageStyle} />
      <Box sx={OverlayBoxStyle}>
        <Typography sx={{ color: textColor }}>{overlayText}</Typography>
      </Box>
    </Box>
  )
}

export default BackgroundOverlayImage
