import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LevelUpModal.module.css';

function LevelUpModal() {
  const { level, closeLevelUpModel } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Para bains</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModel}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
      </div>
    </div>
  );
}

export default LevelUpModal;
