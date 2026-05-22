import Card from "./Card"

const HomeCards = () => {
  const cardsData = [
    {
      title: "For Developers",
      subtitle: "Browse our react jobs and find your next opportunity.",
      buttonLabel: "Browse Jobs"
    },
    {
      title: "For Employers",
      subtitle: "Post your job opening and reach thousands of talented developers.",
      buttonLabel: "Add Job"
    }
  ]
  return (
    <div className="mx-4 my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          buttonLabel={card.buttonLabel}
        />
      ))}
    </div>
  )
}

export default HomeCards