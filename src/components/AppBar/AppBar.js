
import { NavLink } from "react-router-dom"
import css from '../AppBar/AppBar.module.css'

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' }
]

export const AppBar = () => {
  return (
    <div className={css.appBar}>
       {/* <NavLink className={css.appBarMenu} to='/'>Home</NavLink>
       <NavLink className={css.appBarMenu} to='/movies'>Movies</NavLink> */}
      {navItems.map(({ href, text }) => 
      <NavLink className={css.appBarMenu} to={href} key={href}>{text}</NavLink>)}
    </div>
  )
}