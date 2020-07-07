import React, { Component } from 'react';
import {connect} from 'react-redux'
import Slider from '../TableSlider/TableSlider'
import totalReturns from '../../redux/reducers';

class App extends Component {
  //when component mounts we will fire a dispatch to get necessary info 
  componentDidMount(){
    
    this.props.dispatch({type:'GET_TABLE_DATA'})
  }
  state={

  }
  reOrderInfo=(array)=>{
    let newArr =array.sort((a, b) => (a.year > b.year) ? 1 : -1)

this.sliceArray(newArr,0, 20)
}

sliceArray=(array,startPoint, endPoint) =>{
  //this creates target array to make sums of
  let newArr =array.slice(startPoint,endPoint)
  console.log('slice',newArr)

  this.sumValues(newArr, 'totalReturn')
}

sumValues=(array, prop )=>{
  //this targets values 
  let targetProp= array.map(item =>parseInt(item[prop]))
  console.log(targetProp)
  //this will add subsequent values
  const add = arr => arr.reduce((a, b) => a + b, 0);
  console.log(add(targetProp))
}

  render(){
   let newArr= this.reOrderInfo(this.props.state)
  return (
    <div className="App">
      <Slider />
      <table>
        <thead>
          <tr>
          <th>Year</th>
          <th>Total Return(%)</th>
          <th>Cumulative Returns (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.state.map((item,i)=>(
          <tr key={i}>
            <td>{item.year}</td>
        <td>{item.totalReturn}</td>
           {/* {i===0?
           <td key={i}>{item.totalReturn}</td>
           : 
           <td>{parseInt(item.totalReturn)+parseInt(this.props.state[i-1].totalReturn)}</td>} */}
          </tr>
        ))}
        </tbody>
      </table>
    
    </div>
  );
  }
}
const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(App);
