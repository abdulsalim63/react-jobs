import { Link } from "react-router-dom"

const Card = ({title, subtitle, buttonLabel, to}) => {
  return (
    <div className="bg-violet-100 hover:bg-violet-200 rounded-lg p-4 shadow-md flex flex-col items-start justify-between">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg text-gray-500 font-medium">{subtitle}</p>
      </div>
      <Link to={to} className="mt-4 text-center text-white py-2 px-4 rounded-lg bg-blue-800 hover:bg-violet-800">
        {buttonLabel}
      </Link>
    </div>
  )
}

export default Card