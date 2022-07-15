import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      timer: 0
    };
    this.handleClick.bind(this);
    this.playWatch.bind(this);
    this.pauseWatch.bind(this);
    this.resetWatch.bind(this);
  }

  handleClick() {
    if (this.state.isClicked) {
      this.pauseWatch();
    } else {
      this.playWatch();
    }
  }

  playWatch() {
    this.interval = setInterval(() => {
      this.setState({ isClicked: this.state.isClicked, timer: this.state.timer + 1 });
    }, 1000);
    this.setState({ isClicked: true, timer: this.state.timer });
  }

  pauseWatch() {
    clearInterval(this.interval);
    this.setState({ isClicked: false, timer: this.state.timer });
  }

  resetWatch() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: false, timer: this.state.timer });
    }
  }

  render() {
    let icon = '';
    const count = this.state.timer;
    if (!this.state.isClicked) {
      icon = 'fa-solid fa-play fa-2x';
    } else {
      icon = ' fa-solid fa-pause fa-2x';
    }
    return (
      <div className='container'>
        <button className='watch' onClick={this.resetWatch}>{count}</button>
        <i className={`${icon}`} onClick={this.handleClick}></i>
      </div>
    );
  }
}

export default StopWatch;
