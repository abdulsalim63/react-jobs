import { useContext } from "react"
import { ThemeContext } from "../layouts/MainLayout"

const Hero = (props) => {
  const { title, subtitle } = props
  const { theme, themes } = useContext(ThemeContext)

  return (
    <section className={`${themes.find(t => t.name === theme).bg} text-white pb-12 pt-10 text-center space-y-2`}>
      <div className="text-4xl font-bold">{title}</div>
      <div className="text-lg">{subtitle}</div>
    </section>
  )
}

export default Hero