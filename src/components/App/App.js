import React, { Component } from 'react';
import {connect} from 'react-redux'

class App extends Component {
  //when component mounts we will fire a dispatch to get necessary info 
  componentDidMount(){
    
    this.props.dispatch({type:'SET_TABLE_DATA'})
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
        </p>
      </header>
    </div>
  );
  }
}
const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(App);
