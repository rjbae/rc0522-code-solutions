import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      timer: 0,
      interval: null
    };
    this.handleClick.bind(this);
    this.playWatch.bind(this);
    this.pauseWatch.bind(this);
    this.resetWatch.bind(this);
  }

  handleClick() {
    if (!this.state.isClicked) {
      this.playWatch();
    } else {
      this.pauseWatch();
    }
  }

  playWatch() {
    const intervalCount = setInterval(() => {
      this.setState({ isClicked: this.state.isClicked, timer: this.state.timer + 1 });
    }, 1000);
    this.setState({ isClicked: true, timer: this.state.timer, interval: intervalCount });
  }

  pauseWatch() {
    clearInterval(this.state.interval);
    this.setState({ isClicked: false, timer: this.state.timer });
  }

  resetWatch() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: this.state.isClicked, timer: 0 });
    }
  }

  render() {
    let icon = '';
    const count = this.state.timer;

    if (this.state.isClicked) {
      icon = 'fa-pause fa-2x';
    } else {
      icon = 'fa-play fa-2x';
    }

    return (
      <div className='container'>
          <p className='count'>{count}</p>
          <button className='watch' onClick={this.resetWatch}></button>
        <div>
          <i className={`fas ${icon}`} onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

export default StopWatch;
