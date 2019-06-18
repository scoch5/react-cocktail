import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import debounce from 'lodash.debounce';
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
    }, debounce(
      () => { this.handleSubmitForm() },
      300,
      {
        trailing: true
      }
    ))
  }

  handleSubmitForm = (e) => {
    const { q } = this.state
    const { onSearch } = this.props
    
    e && e.preventDefault()
    onSearch(q)
  }

  render() {
    return (
      <div>
        <form className={style.searchform} onSubmit={() => this.handleSubmitForm}>
          <input placeholder="Type to search cocktails" type="search" className={style.input} onChange={this.handleInputChange} />
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