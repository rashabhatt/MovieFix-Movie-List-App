interface ImageStyleType {
  width: string
  height: string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky'
}

const overlayColor = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}

const overlayOpacity = {
  opacity: 0.5,
}

const ImageBoxStyle = {
  position: 'static',
  width: '100%',
  height: '50%',
}

const ImageStyle: ImageStyleType = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'relative',
}

const OverlayBoxStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: overlayColor,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: overlayOpacity,
}

export { ImageBoxStyle, ImageStyle, OverlayBoxStyle }
