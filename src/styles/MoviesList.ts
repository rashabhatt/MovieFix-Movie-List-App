import { styled } from '@mui/system'

export const MovieCardContainer = styled('div')({
  position: 'relative',
  '&:hover .overlay': {
    opacity: 1,
  },
})

export const ImageOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  cursor: 'pointer',
})

export const OverlayContent = styled('div')({
  padding: '10px',
})
