import React, { PureComponent} from 'react'
import './SearchForm.css'
import SearchIcon from './images/search.png'
import ClearIcon from './images/clear.png'

class SearchForm extends PureComponent {
  constructor(props) {
    super(props)
    this.setActive = this.setActive.bind(this)
    this.state = {
      active: false,
      value: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({value: this.refs.input.value})
  }

  setActive() {
    this.setState({active: !this.state.active})
  }

  render() {
    return (
      <div role="searchbox" className="searchBox" >
        <form className="searchForm" type="search" onSubmit={this.handleSubmit.bind(this)}>
          <input className="inputField" type="search" placeholder="Zoeken"
            aria-label="zoeken" ref="input" onFocus={this.setActive} onBlur={this.setActive}/>
          <button className="button search" type="submit" aria-label="submit">
            <img src={ SearchIcon } alt="search icon" className="searchIcon" />
          </button>
          <button className="button clear" type="reset" aria-label="clear search">
            <img src={ ClearIcon } alt="clear icon"
              className={this.state.active ? "clearIcon" : "hide" } />
          </button>
        </form>
      </div>
    )
  }
}

export default SearchForm
