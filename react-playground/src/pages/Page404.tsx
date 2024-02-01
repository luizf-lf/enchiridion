import React from 'react';
import { motion } from 'framer-motion';
import globalContainerVariants from 'src/utils/globalContainerVariants';

import styles from '../assets/styles/pages/page404.module.scss';
import ParrotIllustration from '../assets/img/svg/parrot.svg';

/**
 * 404 Page returned when there's no matching route on the main router.
 *
 */
function Page404() {
  return (
    <motion.div
      variants={globalContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.pageContainer}
    >
      <span className={styles.notFoundText}>
        <b>404</b> Não Encontrado
      </span>
      <img src={ParrotIllustration} alt="Parrot" />
      <h2>O que você procura não está aqui.</h2>
      <span>(Ou não foi implementado ainda)</span>
    </motion.div>
  );
}

export default Page404;
