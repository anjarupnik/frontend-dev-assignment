import React, { PureComponent} from 'react'
import './SearchForm.css'
import SearchIcon from './images/search.png'

class SearchForm extends PureComponent {
  constructor(props) {
    super(props)
    this.setActive = this.setActive.bind(this)
    this.state = {
      active: false
    }
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  setActive() {
    this.setState({active: !this.state.active})
  }

  render() {
    return (
      <div role="searchbox" className="searchBox">
        <form className="searchForm" type="search" onSubmit={this.handleSubmit.bind(this)}
          onBlur={this.setActive}>
          <input className="inputField" type="search" placeholder="Zoeken"
            aria-label="zoeken" ref="input" onFocus={this.setActive}/>
          <button className="searchButton" type="submit" aria-label="submit">
            <img src={ SearchIcon } alt="search icon" className="searchIcon" />
          </button>
        </form>
      </div>
    )
  }
}

export default SearchForm
