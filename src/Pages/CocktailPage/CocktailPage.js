import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
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
  
  renderIngredients = () => {
    const { cocktail } = this.props

    return (
      <ul className={style.ingredients}>
        <h4 className={style.sectionTitle}>
          <FormattedMessage id="ingredients" />
        </h4>
        { new Array(10).fill().map((e, index) => {
          const ingredient = cocktail[`strIngredient${index + 1}`]
          const measure = cocktail[`strMeasure${index + 1}`]
          if (ingredient) {
            return (
              <li>
                <strong className={style.ingredient}>{ ingredient } </strong>
                <span className={style.measure}>
                  { measure }
                </span>
              </li> 
            )
          }
        }
        )}
      </ul>
    )
  }

  render() {
    const { cocktail } = this.props

    if (!cocktail) {
      return (
        <div className={style.wrapper}>
          <FormattedMessage id="loading" />
        </div>
      )
    }

    const {
      strDrink,
      strInstructions,
      strDrinkThumb,
      strCategory,
      strGlass,
    } = cocktail

    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>
          {strDrink}
        </h1>
        <h3 className={style.subtitle}>
          {strCategory}
        </h3>
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

        {
          strGlass &&
          <div className={style.glass}>
            <h4 className={style.sectionTitle}>
              <FormattedMessage id="glassType" />
            </h4>
            {strGlass}
          </div>
        }

        {
          this.renderIngredients()
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
