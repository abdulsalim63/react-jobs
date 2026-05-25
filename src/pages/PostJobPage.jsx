import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from "../layouts/MainLayout"

const PostJobPage = () => {
  const { theme, themes } = useContext(ThemeContext)

  const [type, setJobType] = useState('')
  const [title, setJobTitle] = useState('')
  const [description, setDescription] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyDescription, setCompanyDescription] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    setIsSubmitting(true)
    e.preventDefault()
    // Here you would typically send the form data to your backend API
    const jobData = {
      id: uuidv4(), // Generate a unique ID for the job
      type,
      title,
      description,
      salary,
      location,
      datePosted: new Date().toISOString("en-US"),
      company: {
         name: companyName,
         description: companyDescription,
         contactEmail,
         contactPhone
      }
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData)
    }

    setTimeout(() => {
      fetch('/api/jobs', requestOptions)
        .then(response => response.json())
        .then(() => {
          console.log('Job Data:', jobData)
          setIsSubmitting(false)
          // Navigate back to the jobs page after successful submission
          navigate('/jobs', { state: { message: "Job successfully added"}})
        })
    }, 1000) // Simulate network delay
  }

  const generateRandomJob = () => {
    const randomJobTypes = ['Full-Time', 'Part-Time', 'Contract', 'Internship']
    const randomJobTitles = ['Software Engineer', 'Product Manager', 'Data Analyst', 'UX Designer']
    const randomSalaries = ['0-50k', '50k-60k', '60k-70k', '70k-80k', '80k-90k', '90k-100k', '100k-150k', '150k+']
    const randomLocations = ['New York, NY', 'San Francisco, CA', 'Austin, TX', 'Remote']
    const randomCompanyNames = ['Tech Innovators Inc.', 'Creative Solutions LLC', 'Global Enterprises', 'NextGen Software']
    const randomCompanyDescriptions = [
      'A leading tech company specializing in innovative solutions.',
      'A creative agency focused on delivering unique marketing strategies.',
      'A global corporation with a diverse portfolio of products and services.',
      'A software development firm dedicated to building cutting-edge applications.'
    ]
    const randomContactEmails = ['contact@techinnovators.com', 'contact@creativesolutions.com', 'contact@globalenterprises.com', 'contact@nextgensoftware.com']
    const randomContactPhones = ['555-555-5555', '555-555-5556', '555-555-5557', '555-555-5558']

    setJobType(randomJobTypes[Math.floor(Math.random() * randomJobTypes.length)])
    setJobTitle(`${randomJobTitles[Math.floor(Math.random() * randomJobTitles.length)]}`)
    setDescription(randomCompanyDescriptions[Math.floor(Math.random() * randomCompanyDescriptions.length)])
    setSalary(randomSalaries[Math.floor(Math.random() * randomSalaries.length)])
    setLocation(randomLocations[Math.floor(Math.random() * randomLocations.length)])
    setCompanyName(randomCompanyNames[Math.floor(Math.random() * randomCompanyNames.length)])
    setCompanyDescription(randomCompanyDescriptions[Math.floor(Math.random() * randomCompanyDescriptions.length)])
    setContactEmail(randomContactEmails[Math.floor(Math.random() * randomContactEmails.length)])
    setContactPhone(randomContactPhones[Math.floor(Math.random() * randomContactPhones.length)])
  }

  if (isSubmitting) {
    return (
      <div className={`py-8 ${themes.find(t => t.name === theme).bgLight} flex justify-center`}>
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-700">Posting Job...</h1>
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div className={`py-8 ${themes.find(t => t.name === theme).bgLight} flex justify-center`}>
      <form className="w-2/3 bg-white p-6 rounded-lg shadow-md flex flex-col gap-6" onSubmit={handleSubmit}>
        <h1 className={`text-2xl font-bold ${themes.find(t => t.name === theme).text}`}>Post a New Job</h1>
        <button className={`${themes.find(t => t.name === theme).dot} ${themes.find(t => t.name === theme).hover} cursor-pointer shadow-md text-white py-2 px-4 self-start rounded-lg`} type="button" onClick={generateRandomJob}>
          Generate Random Job
        </button>
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
              value={location}
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
        <button type="submit" className={`${themes.find(t => t.name === theme).dot} ${themes.find(t => t.name === theme).hover} cursor-pointer shadow-md text-white py-2 px-4 rounded-4xl`}>
          Post Job
        </button>
      </form>
    </div>
  )
}

export default PostJobPage