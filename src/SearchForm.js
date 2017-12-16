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
      value: '',
      result: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({value: this.refs.input.value})
  }

  setActive() {
    this.setState({active: !this.state.active})
  }

  callApi(value) {
    if (this.refs.input.value.length > 2) {
      fetch(`http://localhost:5000/search?q= ${value}`)
        .then(result => result.json())
        .then(jsonResult => this.setState({result: jsonResult}))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div role="searchbox" className="searchBox" >
        <form className="searchForm" type="search" onSubmit={this.handleSubmit.bind(this)}>
          <input className="inputField" type="search" placeholder="Zoeken"
            aria-label="zoeken" ref="input" onFocus={this.setActive} onBlur={this.setActive}
            onKeyUp={this.callApi.bind(this)}/>
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
