import React, { Component } from 'react'

export default class Cell extends Component {
   constructor(props) {
      super()
      this.state = {
         color: props.value
      }
   }

   changeColor = () => {
      this.setState({
         color: '#333'
      })
   }

   render() {
      let initProp = this.state.color
      return (
         <div onClick={this.changeColor} className="cell" style={{backgroundColor: initProp}}>
         </div>
      )
   }
}