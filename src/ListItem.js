import React, { PureComponent } from 'react'
import './ListItem.css'

class ListItem extends PureComponent {
  render() {
    return (
      <div className="listItem">
        <p className="listItemText">{this.props.text}</p>
      </div>
    )
  }
}

export default ListItem
