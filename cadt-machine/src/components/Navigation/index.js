/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navigation() {
  const [answer, toggleShowAnswer] = useState(true);
  const faqAnswerHandler = () => {
    toggleShowAnswer(!answer);
  };

  return (
    <div className="nav">
      <Link element={Link} to="/designs" onClick={faqAnswerHandler}>
        {answer ? (<div className="typeTitle active">Designs</div>) : (<div className="typeTitle">Designs</div>)}

      </Link>
      <Link element={Link} to="/setouts" onClick={faqAnswerHandler}>
        {!answer ? (<div className="typeTitle active">Setout</div>) : (<div className="typeTitle">Setout</div>)}
      </Link>
    </div>
  );
}

export default Navigation;
