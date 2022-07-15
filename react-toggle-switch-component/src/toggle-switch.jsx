import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let status = 'off';

    if (!this.state.isClicked) {
      status = 'on';
    }
    return (
      <div className={`container background-${status}`}>
        <div className={status}>
          <button className={`switch-${status}`} onClick={this.handleClick}></button>
        </div>
        <p>{status.toUpperCase()}</p>
    </div>
    );
  }
}
export default ToggleSwitch;
