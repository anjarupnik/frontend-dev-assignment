import React, { PureComponent} from 'react'
import './SearchForm.css'
import SearchIcon from './images/search.png'

class SearchForm extends PureComponent {

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div role="searchbox" className="searchBox">
        <form className="searchForm" type="Search" onSubmit={this.handleSubmit.bind(this)}>
          <input className="inputField" type="search" placeholder="Zoeken"
            aria-label="zoeken" ref="input" />
          <button className="searchButton" type="submit" aria-label="submit">
            <img src={ SearchIcon } alt="search icon" className="searchIcon" />
          </button>
        </form>
      </div>
    )
  }
}

export default SearchForm
