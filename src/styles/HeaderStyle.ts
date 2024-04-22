const LogoHeadingStyle = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'red',
  textDecoration: 'none',
}

const IconBoxStyle = {
  flexGrow: 1,
  display: { xs: 'flex', md: 'none' },
}

const MenuBarStyle = {
  display: { xs: 'block', md: 'none' },
  backgroundColor: 'white',
}

const DrawerLogoHeadingStyle = {
  mr: 2,
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}

const DrawerBoxStyle = { flexGrow: 1, display: { xs: 'none', md: 'flex' } }

const DrawerButtonStyle = {
  my: 2,
  color: 'white',
  display: 'block',
}

export {
  LogoHeadingStyle,
  IconBoxStyle,
  MenuBarStyle,
  DrawerLogoHeadingStyle,
  DrawerBoxStyle,
  DrawerButtonStyle,
}
