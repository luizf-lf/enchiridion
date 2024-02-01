import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

import styles from '../assets/styles/components/pageInfoCard.module.scss';

const messageVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', duration: 0.75, delay: 3 },
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};

const PageInfoCard: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.pageInfoCard}
          variants={messageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key="infoCard"
        >
          <div>
            <button onClick={() => setIsVisible(false)}>
              <FaTimes />
            </button>
          </div>
          <div>
            <FaInfoCircle />
            <span>{children}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageInfoCard;
