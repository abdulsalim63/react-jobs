const Card = ({title, subtitle, buttonLabel}) => {
  return (
    <div className="bg-violet-100 hover:bg-violet-200 rounded-lg p-4 shadow-md flex flex-col items-start justify-between">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg text-gray-500 font-medium">{subtitle}</p>
      </div>
      <button className="mt-4 bg-violet-800 text-white py-2 px-4 rounded-lg hover:bg-violet-700">
        {buttonLabel}
      </button>
    </div>
  )
}

export default Card