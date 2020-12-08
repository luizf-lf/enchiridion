import React from 'react';
import './styles.css';
import WAIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/32681133?s=460&u=e5fcf96cec0ed8dfa8934ed2099d6ededbccdfca&v=4"
          alt=""
        />
        <div>
          <strong>Luiz Fernando</strong>
          <span>DevOps </span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi atque
        sit fuga aut voluptates! Est omnis voluptatem natus, animi et, rem non.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$26,90</strong>
        </p>
        <button>
          <img src={WAIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
