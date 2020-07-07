
import React, {Component} from 'react';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
function log(value) {
  console.log(value); //eslint-disable-line
}

class TableSlider extends Component {
    state = {
      lowerBound: 20,
      upperBound: 40,
      value: [20, 40],
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
    log(value);
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
        <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
      </div>
    );
  }
}
export default TableSlider
