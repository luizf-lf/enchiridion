import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/pages/page-404.css';

function Page404() {
  return (
    <div className="page-404-container">
      <div className="page-404-message-container">
        <img src="https://http.cat/404" alt="Not Found" />
        <div className="page-404-message-text-container">
          <p>O que você procura não está aqui.</p>
          <Link to="/">Take me home, country roads</Link>
        </div>
      </div>
    </div>
  );
}

export default Page404;
