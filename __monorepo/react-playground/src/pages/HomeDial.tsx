import { motion } from 'framer-motion';

import globalContainerVariants from '../utils/globalContainerVariants';

import styles from '../assets/styles/pages/homeDial.module.scss';
import TimeWidget from 'src/components/TimeWidget';
import { FaMousePointer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const appShortcuts = [
  {
    id: 'appShort_1',
    icon: <FaMousePointer />,
    title: 'Clicker',
    bgColor: '#caf7e3',
    link: '/clicker',
  },
];

function HomeDial() {
  return (
    <motion.div
      variants={globalContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.homeDialContainer}
    >
      <h1>Bem vindo</h1>
      <div className={styles.spotlightContainer}>
        <div></div>
        <TimeWidget />
      </div>
      <h2>Apps disponíveis:</h2>
      <div className={styles.appsMenuContainer}>
        {appShortcuts.map((app) => {
          return (
            <Link
              to={`/playground${app.link}`}
              key={app.id}
              // style={{ backgroundColor: app.bgColor }}
            >
              {app.icon}
              <span>{app.title}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

export default HomeDial;
