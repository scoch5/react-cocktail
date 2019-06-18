import { connect } from 'react-redux'
import { searchCocktails } from '../data/Cocktails'

const mapStateToProps = ({ cocktails }) => ({
  cocktails: cocktails,
})

const mapDispatchToProps = (dispatch) => ({
  searchCocktails: (q) => dispatch(searchCocktails(q)),
})

const withSearchPage = component => connect(mapStateToProps, mapDispatchToProps)(component)

export default withSearchPage
