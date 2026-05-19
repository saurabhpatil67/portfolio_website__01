import { animate } from "motion";
import "./hero.scss";
import { motion } from "motion/react";

const Hero = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                staggerChildren: 0.1,
                type: "spring",
                stiffness: 50
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 3,
                repeat: Infinity,

            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"

            },
        }
    }
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 variants={textVariants}>Saurabh Patil</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and AI automation</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/public/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Saurabh Patil Saurabh Patil
            </motion.div>
            <div className="imageContainer">
                <img src="/public/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero