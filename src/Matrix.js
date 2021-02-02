import React, { Component } from 'react'
import Cell from './cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/> ) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

const defaultArray = () => {
  const R = 10, C = 10
  const val = '#F00'

  let arr = Array(R)
  for (let i = 0; i < R; i++) {
    arr[i] = Array(C).fill(val)
  }
  return arr
}

Matrix.defaultProps = {
  values: defaultArray()
}