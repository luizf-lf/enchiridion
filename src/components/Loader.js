import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25 },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        ease: 'easeOut',
      },
    },
  },
};

const Loader = () => {
  const [animation, setAnimation] = useCycle('animationOne', 'animationTwo');

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => setAnimation()}>Cycle Animation</div>
    </>
  );
};

export default Loader;
