import logo from '../assets/react.svg'
import { Link, useLocation } from 'react-router-dom'
import NavbarMenu from './NavbarMenu'
import { useContext, useState } from 'react'
import { ThemeContext } from '../layouts/MainLayout'

const ThemeSelector = ({ selected, options, onChange }) => {
  const [open, setOpen] = useState(false)
  const current = options.find(t => t.name === selected) || options[0]

  return (
    <div>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 px-1 py-2.5 rounded-lg hover:bg-white/20"
      >
        <span className="text-base text-white">Theme</span>
        <span className={`h-3 w-3 rounded-full border-gray-500 border-1 ${current.dot}`} />
        {/* {current.name} */}
        <span className="text-xs opacity-60">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl overflow-hidden shadow-lg z-50 bg-white border border-gray-200">
          {options.map(theme => (
            <button
              key={theme.name}
              onClick={() => { onChange(theme.name); setOpen(false) }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50
                ${selected === theme.name ? 'font-semibold text-gray-900' : 'text-gray-600'}`}
            >
              <span className={`h-3.5 w-3.5 rounded-full ${theme.dot}`} />
              {theme.name}
              {selected === theme.name && <span className="ml-auto text-violet-600">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const { theme, themes, setTheme } = useContext(ThemeContext)
  console.log(theme)
  
  const location = useLocation()
  console.log(location.pathname)

  return (
    <nav className={`flex items-center justify-between p-4 ${themes.find(t => t.name === theme).bg} text-white border-b-2 border-gray-500`}>
      <div className="flex items-center space-x-2">
        <img className="h-10 w-auto" src={logo} width="200" />
        <Link to="/error" className="text-xl font-bold">React Jobs</Link>
      </div>
      <div className="flex space-x-1 text-lg font-medium">
        <NavbarMenu title="Home" to="/" />
        <NavbarMenu title="Jobs" to="/jobs" />
        <NavbarMenu title="Add Job" to="/post-job" />
        <ThemeSelector selected={theme} options={themes} onChange={setTheme} />
      </div>
    </nav>
  )
}

export default Navbar