import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import style from './CocktailTeaser.module.scss';
import { styles } from 'ansi-colors';

const CocktailTeaser = ({ cocktail }) => (
  <Link to={`/cocktails/${cocktail.idDrink}`} className={style.link}>
    <div className={style.wrapper}>
      <div className={style.figure}>
        {
          cocktail.strDrinkThumb && 
          <img src={cocktail.strDrinkThumb} className={styles.image} />
        }
      </div>
      <div className={style.content}>
        <h3 className={style.title}>{ cocktail.strDrink }</h3>
        {
          cocktail.strCategory &&
          <h4 className={style.subtitle}>{ cocktail.strCategory }</h4>
        }
      </div>
      <h3>
        
      </h3>
    </div>
  </Link>
)

CocktailTeaser.propTypes = {
  cocktail: PropTypes.shape({}),
}

CocktailTeaser.defaultProps = {
}

export default CocktailTeaser;