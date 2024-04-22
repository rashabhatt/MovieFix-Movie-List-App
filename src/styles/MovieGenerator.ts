const GridContainerStyle = {
  width: '255%',
  spacing: 2,
  paddingTop: '5px',
  paddingRight: '8px',
  paddingLeft: '8px',
  paddingBottom: '15px',
}

const mediaQueryStyle = {
  '@media only screen and (maxWidth: 600px)': {
    width: '100%',
  },
}

const chipStyle = {
  width: '100px',
  marginTop: '15px',
  marginRight: '5px',
  '@media only screen and (maxWidth: 600px)': {
    width: '100%',
  },
}

export { GridContainerStyle, mediaQueryStyle, chipStyle }
