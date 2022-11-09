import { Container, NavItem } from "./AppBar.styled"

// const navItems = [
//   { href: '/', text: 'Home' },
//   { href: 'movies', text: 'Movies' }
// ]

export const AppBar = () => {
  return (
    <Container>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='movies'>Movies</NavItem>
      {/* {navItems.map(({ href, text }) =>
        <NavItem to={href} key={href}>{text}</NavItem>)} */}
    </Container>
  )
}