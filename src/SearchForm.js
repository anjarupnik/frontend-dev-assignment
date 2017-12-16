import React, { PureComponent} from 'react'
import './SearchForm.css'
import SearchIcon from './images/search.png'
import ClearIcon from './images/clear.png'
import ListItem from './ListItem'

class SearchForm extends PureComponent {
  constructor(props) {
    super(props)
    this.setActive = this.setActive.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      active: false,
      value: '',
      result: []
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({value: this.refs.input.value})
    this.refs.input.value = ''
    this.setActive
  }

  setActive() {
    this.setState({active: !this.state.active})
  }

  callApi() {
    const value = this.refs.input.value
    if (this.refs.input.value.length > 2) {
      fetch(`http://localhost:5000/search?q= ${value}`)
        .then(result => result.json())
        .then(jsonResult => {
          const search = jsonResult.suggestions.filter(i=> i.searchterm.includes(value))
          this.setState({result: search})
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div role="searchbox" className="searchBox" >
        <form className="searchForm" type="search" onSubmit={this.handleSubmit}>
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
        { this.state.active &&
          <div className="list">
            {this.state.result.map(i =>
              <ListItem text={i.searchterm} key={i.nrResults} onClick={this.handleSubmit}/>
            )}
          </div>}
      </div>
    )
  }
}

export default SearchForm
