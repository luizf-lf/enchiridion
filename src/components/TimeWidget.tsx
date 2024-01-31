import React, { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import styles from '../assets/styles/components/timeWidget.module.scss';
import { RiHazeLine, RiMoonLine, RiSunLine } from 'react-icons/ri';

function TimeWidget() {
  const [time, setTime] = useState({ date: new Date() });
  const hours = time.date.getHours();
  const today = format(new Date(), 'EEEEEE, dd MMMM yyyy', { locale: ptBR });
  let welcomeMessage = <></>;

  setTimeout(() => {
    setTime({ date: new Date() });
  }, 1000);

  if (hours >= 19 || hours < 5) {
    welcomeMessage = (
      <>
        <RiMoonLine /> Boa noite
      </>
    );
  }
  if (hours >= 6 && hours < 8) {
    welcomeMessage = (
      <>
        <RiHazeLine /> Bom dia
      </>
    );
  }
  if (hours >= 8 && hours < 12) {
    welcomeMessage = (
      <>
        <RiSunLine /> Bom dia
      </>
    );
  }
  if (hours >= 12 && hours < 17) {
    welcomeMessage = (
      <>
        <RiSunLine /> Boa tarde
      </>
    );
  }
  if (hours >= 17 && hours < 19) {
    welcomeMessage = (
      <>
        <RiHazeLine /> Boa tarde
      </>
    );
  }

  return (
    <div className={styles.timeContainer}>
      <span className={styles.welcomeMessage}>{welcomeMessage}</span>
      <section className={styles.timeDateContainer}>
        <span className={styles.time}>
          {time.date.getHours().toString().padStart(2, '0')}:
          {time.date.getMinutes().toString().padStart(2, '0')}
          <span className={styles.timeSeconds}>
            :{time.date.getSeconds().toString().padStart(2, '0')}
          </span>
        </span>
        <span className={styles.date}>{today}</span>
      </section>
    </div>
  );
  // nice
}

export default TimeWidget;
