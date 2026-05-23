import { Link } from 'react-router-dom'
const ViewAllJobs = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col items-center justify-center">
      <Link to="/jobs" className="text-lg text-center bg-gray-950 w-120 text-gray-50 py-2 px-4 rounded-xl hover:bg-blue-950">View All Jobs</Link>
    </div>
  )
}

export default ViewAllJobs