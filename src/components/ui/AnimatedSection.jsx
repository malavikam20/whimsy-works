import { motion } from 'framer-motion'

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  const offset = directions[direction] || directions.up

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection