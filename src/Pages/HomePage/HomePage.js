import React from 'react';
import logo from './logo.svg';
import style from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <p>
          Edit <code>src/HomePage.js</code> and save to reload.
        </p>
        <a
          className={style.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default HomePage;
