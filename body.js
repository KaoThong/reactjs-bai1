import React, { Component } from 'react'
import Content from './content'
import Service from './service'

class Body extends Component {
  render() {
    return (
      <div>
        <Content />
        <Service />
      </div>
    );
  }
}

export default Body