import React, { Component } from 'react';
import {connect} from 'react-redux'

class App extends Component {
  //when component mounts we will fire a dispatch to get necessary info 
  componentDidMount(){
    
    this.props.dispatch({type:'GET_TABLE_DATA'})
   
  }
  state={

  }
  reOrderInfo=(array)=>{
    //making function to sort array upon entry 
}

  
  render(){
    console.log(this.props.state)
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
          <th>Year</th>
          <th>Total Return</th>
          <th>Cumulative Returns</th>
          </tr>
        </thead>
        <tbody>
        {/* {this.state.map((item,i)=>(
          <tr key={i}>
            <th>{item.year}</th>
        <th>{item.totalReturn}</th>
            <th>tbd</th>
          </tr>
        ))} */}
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
