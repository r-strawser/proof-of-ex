import React, { Component } from 'react'
import PropTypes            from 'prop-types'

class TextInput extends Component {
  render() {
    const { label } = this.props
    return (
      <div>{ label }</div>
    )
  }
}

// makes sure prop is a string
TextInput.propTypes = {
  label: PropTypes.string.isRequired
}

TextInput.defaultProps = {
  label: "Enter Name"
}

export default TextInput
