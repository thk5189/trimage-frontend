import React from 'react';
import '../css/Header.css';

function Header(props) {
  return (
    <div className="header">
      <img
        src="https://i.imgur.com/9bnrCg0.png"
        alt="Logo"
        className="logo"
        style={{ width: '50px', height: 'auto' }}
      />
      <h1 className="header-title">trimko.</h1>
    </div>
  );
}

export default Header;
