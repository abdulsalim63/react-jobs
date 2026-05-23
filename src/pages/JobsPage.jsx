import JobListings from '../components/JobListings'
import { useState, useEffect } from 'react'

const JobsPage = () => {
  const [allJobs, setAllJobs] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/jobs?_sort=-datePosted")
      .then(response => response.json())
      .then(data => setAllJobs(data))
  }, [])
  return (
    <section>
      <JobListings jobs={allJobs} />
    </section>
  )
}

export default JobsPage