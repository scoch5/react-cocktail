import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import cocktails from './cocktails.svg';
import style from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <img src={cocktails} className={style.logo} alt="logo" />
        <h1>React Cocktail</h1>
        <p>
          <FormattedMessage id="homeIntro" />
        </p>
        <Link
          className={style.link}
          to="/search"
        >
          <FormattedMessage id="searchCocktail" />
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
