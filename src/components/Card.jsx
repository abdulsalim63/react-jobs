import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../layouts/MainLayout"

const Card = ({title, subtitle, buttonLabel, to}) => {
  const { theme, themes } = useContext(ThemeContext)

  return (
    <div className={`${themes.find(t => t.name === theme).bgLight} ${themes.find(t => t.name === theme).hoverLight} rounded-lg p-4 shadow-md flex flex-col items-start justify-between`}>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg text-gray-500 font-medium">{subtitle}</p>
      </div>
      <Link to={to} className={`mt-4 text-center text-white py-2 px-4 rounded-lg ${themes.find(t => t.name === theme).dot} ${themes.find(t => t.name === theme).hover}`}>
        {buttonLabel}
      </Link>
    </div>
  )
}

export default Card