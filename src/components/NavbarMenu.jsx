import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const NavbarMenu = ({ title, to }) => {
  const location = useLocation()

  return (
      <NavLink to={to} className={({ isActive }) => `btn ${isActive && location.pathname !== '/' ? 'bg-black' : 'hover:bg-black'} p-2 px-4 rounded-lg`}>
        {title}
      </NavLink>
  )
}

export default NavbarMenu