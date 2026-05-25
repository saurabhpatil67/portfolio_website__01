import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "motion/react"


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

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-400, 200])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio