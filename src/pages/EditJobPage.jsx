import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Spinner from "../components/Spinner"

const EditJobPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  if (location.state?.data) {
    console.log(location.state?.data)
  }

  const [type, setJobType] = useState(location.state?.data?.type)
  const [title, setJobTitle] = useState(location.state?.data?.title)
  const [description, setDescription] = useState(location.state?.data?.description)
  const [salary, setSalary] = useState(location.state?.data?.salary)
  const [jobLocation, setLocation] = useState(location.state?.data?.location)
  const [companyName, setCompanyName] = useState(location.state?.data?.company?.name)
  const [companyDescription, setCompanyDescription] = useState(location.state?.data?.company?.description)
  const [contactEmail, setContactEmail] = useState(location.state?.data?.company?.contactEmail)
  const [contactPhone, setContactPhone] = useState(location.state?.data?.company?.contactEmail)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    setIsSubmitting(true)
    e.preventDefault()
    // Here you would typically send the form data to your backend API
    const jobData = {
      type,
      title,
      description,
      salary,
      location: jobLocation,
      datePosted: new Date().toISOString("en-US"),
      company: {
         name: companyName,
         description: companyDescription,
         contactEmail,
         contactPhone
      }
    }

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData)
    }

    setTimeout(() => {
      fetch(`/api/jobs/${location.state?.data?.id}`, requestOptions)
        .then(response => response.json())
        .then(() => {
          console.log('Job Data:', jobData)
          setIsSubmitting(false)
          // Navigate back to the jobs page after successful submission
          navigate(`/jobs/${location.state?.data?.id}`, { state: { message: "Job successfully edited"}})
        })
    }, 1000) // Simulate network delay
  }
  
  if (isSubmitting) {
    return (
      <div className="py-8 bg-violet-100 flex justify-center">
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-700">Posting Job...</h1>
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 bg-violet-100 flex justify-center">
      <form className="w-2/3 bg-white p-6 rounded-lg shadow-md flex flex-col gap-6" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-gray-700">Edit Job</h1>
        <div>
          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Job Type</label>
            <select className="border border-gray-300 rounded p-2 w-full" required value={type} onChange={(e) => setJobType(e.target.value)}>
              <option value="">Select Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Job Listing Name</label>
            <input 
              type="text" 
              className="border border-gray-300 rounded p-2 w-full" 
              required
              value={title}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          
          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Description</label>
            <textarea 
              className="border border-gray-300 rounded p-2 w-full" 
              rows="4" 
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Salary</label>
            <select className="border border-gray-300 rounded p-2 w-full" required value={salary} onChange={(e) => setSalary(e.target.value)}>
              <option value="">Select Salary Range</option>
              <option value="0-50k">$0 - $50k</option>
              <option value="50k-60k">$50k - $60k</option>
              <option value="60k-70k">$60k - $70k</option>
              <option value="70k-80k">$70k - $80k</option>
              <option value="80k-90k">$80k - $90k</option>
              <option value="90k-100k">$90k - $100k</option>
              <option value="100k-150k">$100k - $150k</option>
              <option value="150k+">$150k+</option>
            </select>
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Location</label>
            <input 
              type="text" 
              className="border border-gray-300 rounded p-2 w-full" 
              required
              value={jobLocation}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <h1 className="text-3xl font-semibold text-gray-700 mt-8 mb-4">Company Info</h1>
          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Company Name</label>
            <input 
              type="text" 
              className="border border-gray-300 rounded p-2 w-full" 
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Company Description</label>
            <textarea 
              className="border border-gray-300 rounded p-2 w-full" 
              rows="4" 
              required
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Contact Email</label>
            <input 
              type="email" 
              className="border border-gray-300 rounded p-2 w-full" 
              required
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-4 flex flex-col gap-2">
            <label className="text-lg font-semibold">Contact Phone</label>
            <input 
              type="tel" 
              className="border border-gray-300 rounded p-2 w-full" 
              required
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <button type="submit" className="bg-green-600 hover:bg-green-700 w-20/41 cursor-pointer shadow-md text-white py-2 px-4 rounded-4xl">
            Save
          </button>
          <button type="button" className="bg-red-600 hover:bg-red-700 w-20/41 cursor-pointer shadow-md text-white py-2 px-4 rounded-4xl" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditJobPage