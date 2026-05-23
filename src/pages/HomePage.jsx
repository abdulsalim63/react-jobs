import { useState, useEffect } from "react"
import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  const [recentJobs, setRecentJobs] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/jobs?_sort=-datePosted&_page=1&_per_page=3")
      .then(response => response.json())
      .then(data => setRecentJobs(data.data))
  }, [])

  return (
    <>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and experience." />
      <HomeCards />
      <JobListings jobs={recentJobs} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage