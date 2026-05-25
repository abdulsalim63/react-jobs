import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { createContext, useState } from "react"

const ThemeContext = createContext()

const themes = [
  { name: 'Violet', text: 'text-violet-800', textLight: 'text-violet-600', bg: 'bg-violet-800', bgLight: 'bg-violet-100', dot: 'bg-violet-700', hover: 'hover:bg-violet-800', hoverLight: 'hover:bg-violet-200', textHover: 'hover:text-violet-800'},
  { name: 'Amber',  text: 'text-amber-800', textLight: 'text-amber-600',  bg: 'bg-amber-800', bgLight: 'bg-amber-100',  dot: 'bg-amber-700', hover: 'hover:bg-amber-800', hoverLight: 'hover:bg-amber-200', textHover: 'hover:text-amber-800'},
  { name: 'Emerald', text: 'text-emerald-800', textLight: 'text-emerald-600', bg: 'bg-emerald-800', bgLight: 'bg-emerald-100',dot: 'bg-emerald-700', hover: 'hover:bg-emerald-800', hoverLight: 'hover:bg-emerald-200', textHover: 'hover:text-emerald-800'},
  { name: 'Rose', text: 'text-rose-800', textLight: 'text-rose-600', bg: 'bg-rose-800', bgLight: 'bg-rose-100', dot: 'bg-rose-700', hover: 'hover:bg-rose-800', hoverLight: 'hover:bg-rose-200', textHover: 'hover:text-rose-800'},
]

const MainLayout = () => {
  const [theme, setTheme] = useState("Violet")

  return (
    <ThemeContext value={{ theme, themes, setTheme }}>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer autoClose={2000} />
    </ThemeContext>
  )
}

export { MainLayout as default, ThemeContext }