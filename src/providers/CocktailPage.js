import { connect } from 'react-redux'
import { getCocktailByID, resetCocktail } from '../data/Cocktail'

const mapStateToProps = ({ cocktail }) => ({
  cocktail: cocktail,
})

const mapDispatchToProps = (dispatch) => ({
  getCocktailByID: (id) => dispatch(getCocktailByID(id)),
  resetCocktail: () => dispatch(resetCocktail()),
})

const withCocktailPage = component => connect(mapStateToProps, mapDispatchToProps)(component)

export default withCocktailPage
