import { connect } from 'react-redux'
import { searchCocktails, resetSearchCocktails } from '../data/Cocktails'

const mapStateToProps = ({ cocktails }) => ({
  cocktails: cocktails,
})

const mapDispatchToProps = (dispatch) => ({
  searchCocktails: (q) => dispatch(searchCocktails(q)),
  resetSearchCocktails: () => dispatch(resetSearchCocktails()),
})

const withSearchPage = component => connect(mapStateToProps, mapDispatchToProps)(component)

export default withSearchPage
