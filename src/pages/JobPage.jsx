import { Link, useLoaderData } from "react-router-dom"
import { FaMapMarker, FaArrowLeft } from 'react-icons/fa'

const JobPage = () => {
  // const { id } = useParams()
  const job = useLoaderData()

  return (
    <>
      <div className="px-8 py-8 bg-white">
        <Link to="/jobs" className="text-violet-600 hover:text-violet-800 font-medium">
          <FaArrowLeft className="inline mr-2" />
          Back to Job Listings
        </Link>
      </div>
      <div className="px-8 py-8 bg-violet-100 flex flex-row gap-8">
        <div className="w-2/3 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md h-38 flex flex-col justify-between">
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <p className="text-gray-600 font-medium">{job.type}</p>
            <p className="text-amber-700 font-semibold">
              <FaMapMarker className="inline mr-2" />
              {job.location}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-72 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-violet-800">Job Description</h2>
              <p className="text-gray-700">{job.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-4 mb-2 text-violet-800">Salary</h2>
              <p className="text-amber-700 font-semibold">${job.salary} / Year</p>
            </div>
          </div>
        </div>
        <div className="w-1/3  flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md h-144">
            <h2 className="text-2xl font-bold mb-6">Company Info</h2>
            <h1 className="text-gray-700 text-3xl font-semibold mb-2">{job.company.name}</h1>
            <p className="text-gray-700 font-medium">{job.company.description}</p>
            <div className="h-0.25 bg-gray-300 my-8" />
            <h1 className="text-gray-700 text-2xl font-semibold mb-2">Contact Email</h1>
            <p className="text-gray-600 bg-violet-100 p-2 rounded font-medium">{job.company.contactEmail}</p>
            <h1 className="text-gray-700 text-2xl font-semibold mt-4 mb-2">Contact Phone</h1>
            <p className="text-gray-600 bg-violet-100 p-2 rounded font-medium">{job.company.contactPhone}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-48">
            <h2 className="text-2xl font-bold mb-4">Manage Job</h2>
            <div className="flex flex-col gap-4">
              <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-4xl">
                Edit Job
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-4xl">
                Delete Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const jobLoader = async ({ params }) => {
  try {
    const response = await fetch(`/api/jobs/${params.id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching job:", error)
    return null
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export { JobPage as default, jobLoader }