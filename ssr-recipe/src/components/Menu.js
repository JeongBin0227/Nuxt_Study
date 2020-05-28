import { Link } from 'react-router-dom';
import React from 'react';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to='/red'>Res</Link>
      </li>
      <li>
        <Link to='/blue'>Blus</Link>
      </li>
    </ul>
  );
};

export default Menu;
