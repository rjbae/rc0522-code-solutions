import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <div className='container background-on'>
          <div className='on'>
            <button className='switch' onClick={this.handleClick}></button>
          </div>
          <p>ON</p>
        </div>
      );
    } else {
      return (
        <div className='container background-off'>
          <div className='off'>
            <button className='switch-off' onClick={this.handleClick}></button>
          </div>
          <p>OFF</p>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
