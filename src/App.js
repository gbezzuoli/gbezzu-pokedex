import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import GenSelect from './components/GenSelect'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='list-dex'>
          <Dashboard />
        </div>
      </div>
    )
  }
}

