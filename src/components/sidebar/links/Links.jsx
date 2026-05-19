import { motion } from "motion/react"

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  },
};

const Links = () => {

  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"]

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}

        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links