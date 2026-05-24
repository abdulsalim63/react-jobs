import { Link } from 'react-router-dom'
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="p-4 bg-white rounded-lg flex flex-col items-center justify-center">
      <button className="self-start cursor-pointer text-violet-600 hover:text-violet-800 font-medium" onClick={() => navigate(-1)}>
        <FaArrowLeft className="inline mr-2" />
        Go Back
      </button>
      <FaExclamationTriangle className="text-5xl text-yellow-500 mb-4" />
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-700 mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-lg text-center font-medium bg-gray-950 w-auto text-gray-50 py-1 px-4 rounded-lg hover:bg-blue-950">Go Back Home</Link>
    </div>
  )
}

export default NotFoundPage