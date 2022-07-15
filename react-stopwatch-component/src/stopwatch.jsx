import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      timer: 0,
      interval: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.playWatch = this.playWatch.bind(this);
    this.pauseWatch = this.pauseWatch.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
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
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
    this.setState({ isClicked: true, interval: intervalCount });
  }

  pauseWatch() {
    clearInterval(this.state.interval);
    this.setState({ isClicked: false });
  }

  resetWatch() {
    if (!this.state.isClicked) {
      this.setState({ timer: 0 });
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
