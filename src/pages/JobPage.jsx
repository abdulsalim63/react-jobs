import { Link, useLoaderData } from "react-router-dom"
import { FaMapMarker, FaArrowLeft } from 'react-icons/fa'
import { useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { useEffect, useContext } from "react"
import { ThemeContext } from "../layouts/MainLayout"

const JobPage = () => {
  // const { id } = useParams()
  const job = useLoaderData()
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, themes } = useContext(ThemeContext)


  const onDelete = () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      fetch(`/api/jobs/${job.id}`, { method: 'DELETE' })
        .then(() => {
          // Navigate back to the jobs page after successful deletion
          navigate('/jobs', { state: { message: "Job successfully deleted" }})
        })
        .catch(error => {
          console.error("Error deleting job:", error)
          toast.error("Error deleteing job")
        })
    }
  }

  const onEdit = () => {
    // Navigate to the edit page for this job
    navigate('/jobs/edit/${job.id}', { state: { data: job }})
  }
  
  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message)
    }
  }, [location])

  return (
    <>
      <div className="px-8 py-4 bg-white">
        <Link to="/jobs" className={`${themes.find(t => t.name === theme).textLight} ${themes.find(t => t.name === theme).textHover} font-medium`}>
          <FaArrowLeft className="inline mr-2" />
          Back to Job Listings
        </Link>
      </div>
      <div className={`px-8 py-8 ${themes.find(t => t.name === theme).bgLight} flex flex-row gap-8`}>
        <div className="w-2/3 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md h-1/5.5 flex flex-col justify-between">
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <p className="text-gray-600 font-medium">{job.type}</p>
            <p className={`${themes.find(t => t.name === theme).text} font-semibold`}>
              <FaMapMarker className="inline mr-2" />
              {job.location}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-72 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Job Description</h2>
              <p className="text-gray-700">{job.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-4 mb-2">Salary</h2>
              <p className={`${themes.find(t => t.name === theme).text}  font-semibold`}>${job.salary} / Year</p>
            </div>
          </div>
        </div>
        <div className="w-1/3  flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md h-4/5">
            <h2 className="text-2xl font-bold mb-6">Company Info</h2>
            <h1 className="text-gray-700 text-3xl font-semibold mb-2">{job.company.name}</h1>
            <p className="text-gray-700 font-medium">{job.company.description}</p>
            <div className="h-0.25 bg-gray-300 my-8" />
            <h1 className="text-gray-700 text-2xl font-semibold mb-2">Contact Email</h1>
            <p className={`text-gray-600 ${themes.find(t => t.name === theme).bgLight} p-2 rounded font-medium break-all`}>{job.company.contactEmail}</p>
            <h1 className="text-gray-700 text-2xl font-semibold mt-4 mb-2">Contact Phone</h1>
            <p className={`text-gray-600 ${themes.find(t => t.name === theme).bgLight} p-2 rounded font-medium break-all`}>{job.company.contactPhone}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-2/5">
            <h2 className="text-2xl font-bold mb-4">Manage Job</h2>
            <div className="flex flex-col gap-4">
              <button className={`${themes.find(t => t.name === theme).dot} ${themes.find(t => t.name === theme).hover} text-white py-2 px-4 rounded-4xl`} onClick={onEdit}>
                Edit Job
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-4xl" onClick={onDelete}>
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