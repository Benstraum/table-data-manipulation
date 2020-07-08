
import React, {Component} from 'react';
import {connect} from 'react-redux'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


class TableSlider extends Component {
    state = {
      lowerBound: 0,
      upperBound: 94,
      value: [0, 94],
    };
  
//functions seperately target upper and lower in state to slider value
  onLowerBoundChange = e => {
    this.setState({ lowerBound: +e.target.value });
  };

  onUpperBoundChange = e => {
    this.setState({ upperBound: +e.target.value });
  };

  //functions goes off establishing the array with upper and lower bound. will use to establish where to splice array.
  onSliderChange = value => {
this.props.dispatch({type:'SET_RANGE', payload:value})
    this.setState({
      value,
    });
  };

  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  };
  render() {
    return (
      <div>
        <Range allowCross={false} label='Date range for S&P'  value={this.state.value} min={0} max={this.props.array.length}  onChange={this.onSliderChange} />
      </div>
    );
  }
}
export default connect()(TableSlider);
