import logo from '../assets/react.svg'
import { Link, useLocation } from 'react-router-dom'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <nav className="flex items-center justify-between p-4 bg-violet-800 text-white border-b-2 border-gray-500">
      <div className="flex items-center space-x-2">
        <img className="h-10 w-auto" src={logo} width="200" />
        <Link to="/error" className="text-xl font-bold">React Jobs</Link>
      </div>
      <div className="flex space-x-1 text-lg font-medium">
        <NavbarMenu title="Home" to="/" />
        <NavbarMenu title="Jobs" to="/jobs" />
        <NavbarMenu title="Add Job" to="/post-job" />
      </div>
    </nav>
  )
}

export default Navbar