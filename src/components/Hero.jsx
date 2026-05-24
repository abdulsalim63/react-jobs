const Hero = (props) => {
  const { title, subtitle } = props

  return (
    <section className="bg-violet-800 text-white pb-12 pt-10 text-center space-y-2">
      <div className="text-4xl font-bold">{title}</div>
      <div className="text-lg">{subtitle}</div>
    </section>
  )
}

export default Hero