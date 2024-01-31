import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMousePointer } from 'react-icons/fa';
import { RiEqualizerLine, RiInformationLine } from 'react-icons/ri';

import styles from '../assets/styles/components/sidebarMenu.module.scss';
import { motion } from 'framer-motion';

// array containing all the menu buttons
const menuItems = [
  {
    link: '/playground',
    icon: <FaHome />,
  },
  {
    link: '/playground/clicker',
    icon: <FaMousePointer />,
  },
];

const bottomItems = [
  {
    link: '/playground/info',
    icon: <RiInformationLine />,
  },
  {
    link: '/playground/settings',
    icon: <RiEqualizerLine />,
  },
];

const sidebarVariants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
};

export default function SidebarMenu() {
  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className={styles.sidebarContainer}
    >
      <div>
        {menuItems.map((item) => {
          return (
            <Link to={item.link} key={item.link}>
              {item.icon}
            </Link>
          );
        })}
      </div>

      <div>
        {bottomItems.map((item) => {
          return (
            <Link to={item.link} key={item.link}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
