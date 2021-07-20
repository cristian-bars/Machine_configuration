/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="content">
      <Link element={Link} to="/designs">
        <div className="typeTitle">Designs</div>
      </Link>
      <Link element={Link} to="/setouts">
        <div className="typeTitle">Setout</div>
      </Link>
    </div>
  );
}

export default Navigation;
