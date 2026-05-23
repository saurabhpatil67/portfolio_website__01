import "./portfolio.scss"


const items = [
    {
        id: 1,
        title: "AI Expense Tracker",
        img: "/public/expence.png",
        desc: "Smart expense tracking web app with AI-powered receipt scanning, budget monitoring, and monthly analytics dashboard."
    },
    {
        id: 2,
        title: "Weather Forecast App",
        img: "/public/weather.png",
        desc: "Responsive weather application with real-time forecast data, temperature tracking, and city-based search functionality."
    },
    {
        id: 3,
        title: "Portfolio Website",
        img: "/public/portfolio.png",
        desc: "Personal portfolio website showcasing projects, skills, animations, and responsive modern UI design."
    },
    {
        id: 4,
        title: "Task Management App",
        img: "/public/expence.png",
        desc: "Collaborative productivity application with task assignment, progress tracking, and team management features."
    },
];

const Single = ({item}) => {
    return<section>{item.title}</section>
}
const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <div className="progressBar"></div>
        </div>
       {items.map((item)=> (
        <Single item={item} key={item.id}/>
       ))}
    </div>
  )
}

export default Portfolio