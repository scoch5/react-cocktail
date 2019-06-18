import React from 'react';
import { PropTypes } from 'prop-types';
import {
  SearchCocktailsForm,
  CocktailTeaser,
} from '../../components';
import {
  withSearchPage,
} from '../../providers';
import style from './SearchPage.module.scss';

function SearchPage({ searchCocktails, cocktails }) {
  return (
    <div className={style.wrapper}>
      <SearchCocktailsForm onSearch={searchCocktails} />

      {
        cocktails &&
        <div className={style.list}>
          {
            cocktails.map((cocktail) => 
              <CocktailTeaser key={cocktail.idDrink} cocktail={cocktail} />
            )
          }
        </div>
      }

    </div>
  );
}

SearchPage.propTypes = {
  searchCocktails: PropTypes.func.isRequired,
  cocktails: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

SearchPage.defaultProps = {
}

export default withSearchPage(SearchPage);
