import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';
import {
} from '../../components';
import {
  withCocktailPage,
} from '../../providers';
import style from './CocktailPage.module.scss';

class CocktailPage extends Component {
  componentDidMount() {
    const { match: { params },
      getCocktailByID,
    } = this.props
    const { id } = params
    
    getCocktailByID(id)
  }

  componentWillUnmount() {
    const {
      resetCocktail
    } = this.props

    console.log('componentWillUnmount')

    resetCocktail()
  }
  
  render() {
    const { cocktail } = this.props

    if (!cocktail) {
      return (
        <div className={style.wrapper}>
          Loading
        </div>
      )
    }

    const {
      strDrink,
      strInstructions,
      strDrinkThumb,
    } = cocktail

    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>
          {strDrink}
        </h1>
        <img
          alt={strDrink}
          src={strDrinkThumb}
          className={style.image}
        />
        {
          strInstructions &&
          <p className={style.instructions}>
            {strInstructions}
          </p>
        }
      </div>
    );
  }
}

CocktailPage.propTypes = {
  cocktail: PropTypes.shape({}).isRequired,
  getCocktailByID: PropTypes.func.isRequired,
  resetCocktail: PropTypes.func.isRequired,
}

CocktailPage.defaultProps = {
  cocktail: {},
}

export default withRouter(withCocktailPage(CocktailPage));
