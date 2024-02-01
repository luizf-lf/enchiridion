import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../assets/styles/pages/clicker.module.scss';
import globalContainerVariants from 'src/utils/globalContainerVariants';
import { FaMousePointer } from 'react-icons/fa';
import PageInfoCard from '../components/PageInfoCard';

function Clicker() {
  const [totalClicks, setTotalClicks] = useState(
    Number(localStorage.getItem('pgClickerTotal'))
  );

  function handleClicks() {
    setTotalClicks(totalClicks + 1);
    localStorage.setItem('pgClickerTotal', String(totalClicks + 1));
  }

  return (
    <motion.div
      variants={globalContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.clickerContainer}
    >
      <span className={styles.clickTitle}>Total de cliques</span>
      <span className={styles.clickIndicator}>{totalClicks}</span>
      <button className={styles.clickButton} onClick={() => handleClicks()}>
        <FaMousePointer />
        Clicar +1 vez
      </button>
      <PageInfoCard>
        Esta página foi criada para exercitar os conceitos de <i>state</i> e{' '}
        <i>local storage</i>. Cada vez que o botão acima é clicado, o numero de
        clicks é atualizado e seu valor é salvo no local storage do navegador,
        ou seja, mesmo se a página for atualizada, o valor continuará salvo.
      </PageInfoCard>
    </motion.div>
  );
}

export default Clicker;
