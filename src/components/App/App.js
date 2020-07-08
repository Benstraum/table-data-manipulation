import React, { Component } from 'react';
import { connect } from 'react-redux'
import Slider from '../TableSlider/TableSlider'

import './App.css'
class App extends Component {
  //when component mounts we will fire a dispatch to get necessary info 
  componentDidMount() {
    this.props.dispatch({ type: 'GET_TABLE_DATA' })
  }
  //this orders the array in ascending years
  reOrderInfo = (array) => {
    let newArr = array.sort((a, b) => (a.year > b.year) ? 1 : -1)
    return newArr
  }
  //this uses reduxstate to actively slice the array but starts with the full value
  startingSliceArray = (array) => {
    //this creates target array to make sums of
    let newArr = array.slice(this.props.range[0] || 0, this.props.range[1] || 95)

    return newArr
  }

  sumValues = (array, prop, i) => {
    //this targets values 
    let targetProp = array.map(item => parseInt(item[prop]) )
    //this will add subsequent values
    const add = arr => arr.reduce((a, b) => parseInt(a)+ parseInt(b));
    //this makes it so it sums up at each point in the table (rounded down)
    let result = targetProp.slice(0, i)
    return add(result)
  }
  mappedItemSlice = (array, end) => {
    let newArr = array.slice(0, end)
    return newArr
  }
  render() {
    console.log(this.props.dataArr)
    let array = this.reOrderInfo(this.props.dataArr)
    let slicedArr = this.startingSliceArray(array)
    return (
      <div className="App">
        <h1>S&P 500 Total and Cumulative Returns by Year</h1>
        <div className='slider'>
        <Slider array={array} />
        <p style={{ float: "left" }}>(1926)</p>
        <p style={{ float: "right" }}>(2019)</p>
        </div>
        <table >
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Return</th>
              <th>Cumulative Returns by Year</th>
            </tr>
          </thead>
          <tbody>

            {slicedArr.map((item, i) => (
              <tr key={i} >
                <td>{item.year}</td>
                {item.totalReturn < 0 ? 
                <td style={{ color: 'red' }}>{item.totalReturn}</td> 
                : 
                <td>{item.totalReturn}</td>}
                {this.sumValues(slicedArr, 'totalReturn', i + 1) <0 ?
                <td style={{ color: 'red' }}>{this.sumValues(slicedArr, 'totalReturn', i + 1)} </td>
                :
                <td>{this.sumValues(slicedArr, 'totalReturn', i + 1)} </td>}
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    );
  }
}
const mapStateToProps = state => ({
  range: state.range,
  dataArr: state.totalReturns
});
export default connect(mapStateToProps)(App);
