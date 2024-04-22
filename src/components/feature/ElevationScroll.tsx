// Reusable Component to elevate scroll on the main screen for AppBar
import { useScrollTrigger } from '@mui/material'
import React from 'react'

interface ElevationProps {
  window?: () => Window
  children: React.ReactElement
}

const ElevationScroll = (props: ElevationProps) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export default ElevationScroll
