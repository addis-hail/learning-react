import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Addisalem'
      }
      console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

  render() {
    console.log('LifeCycleB render')
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleA