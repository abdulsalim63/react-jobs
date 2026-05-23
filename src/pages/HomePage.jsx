import { useState, useEffect } from "react"
import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  const [recentJobs, setRecentJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRecentJobs = async () => {
      setIsLoading(true)
      try {
        setTimeout(async () => {
          const response = await fetch("/api/jobs?_sort=-datePosted&_page=1&_per_page=4")
          const data = await response.json()
          setRecentJobs(data.data)
          setIsLoading(false)
        }, 500)
      } catch (error) {
        console.error("Error fetching recent jobs:", error)
        setIsLoading(false)
      }
    }

    fetchRecentJobs()
  }, [])

  return (
    <>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and experience." />
      <HomeCards />
      <JobListings jobs={recentJobs} isLoading={isLoading} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage