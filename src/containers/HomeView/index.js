import React, { Component } from 'react'
import TextInput            from 'components/TextInput'

class HomeView extends Component {
  render() {
    return (
      <div className="container">
        <TextInput label="Enter Name" />
      </div>
    )
  }
}

export default HomeView
