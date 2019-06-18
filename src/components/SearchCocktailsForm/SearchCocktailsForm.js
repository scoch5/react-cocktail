import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import style from './SearchCocktailsForm.module.scss';

class SearchCocktailsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      q: '',
    }
  }

  handleInputChange = (e) => {
    this.setState({
      q: e.target.value
    })
  }

  handleSubmitForm = (e) => {
    const { q } = this.state
    const { onSearch } = this.props

    e.preventDefault()
    onSearch(q)
  }

  render() {
    return (
      <div>
        <form className={style.searchform} onSubmit={this.handleSubmitForm}>
          <input type="search" className={style.input} onChange={this.handleInputChange} />
          <button className={style.button}>Search</button>
        </form>
      </div>
    );
  }
}

SearchCocktailsForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

SearchCocktailsForm.defaultProps = {
}

export default SearchCocktailsForm;