import React, {Component} from 'react';

class Input extends Component {
  handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (this.props.handleNum) {
      this.props.handleNum((inputValue * 100).toFixed(2) + '%');
    }
  };

  render() {
    return (
      <div>
        <span>数字转换：</span>
        <input
          type='number'
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default Input;