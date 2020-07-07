import React, { Component } from 'react';
import {connect} from 'react-redux'
import Slider from '../TableSlider/TableSlider'
class App extends Component {
  //when component mounts we will fire a dispatch to get necessary info 
  componentDidMount(){
    
    this.props.dispatch({type:'GET_TABLE_DATA'})
  }
  state={

  }
  reOrderInfo=(array)=>{
    console.log(array.sort((a, b) => (a.year > b.year) ? 1 : -1))

}

  
  render(){
    this.reOrderInfo(this.props.state)
  return (
    <div className="App">
      <Slider />
      <table>
        <thead>
          <tr>
          <th>Year</th>
          <th>Total Return</th>
          <th>Cumulative Returns</th>
          </tr>
        </thead>
        <tbody>
        {this.props.state.map((item,i)=>(
          <tr key={i}>
            <td>{item.year}</td>
        <td>{item.totalReturn}</td>
           {i===0?
           <td key={i}>{item.totalReturn}</td>
           : 
           <td>{parseInt(item.totalReturn)+parseInt(this.props.state[i-1].totalReturn)}</td>}
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
