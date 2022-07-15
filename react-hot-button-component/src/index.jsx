import React from 'react';
import ReactDOM from 'react-dom/client';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const count = this.state.clickCount + 1;
    this.setState({ clickCount: count });
  }

  render() {
    const count = this.state.clickCount;
    let btnClass = '';
    if (count <= 3) {
      btnClass = 'btn';
    } else if (count <= 6) {
      btnClass = 'btn-cool';
    } else if (count <= 9) {
      btnClass = 'btn-neutral';
    } else if (count <= 12) {
      btnClass = 'btn-warm';
    } else if (count <= 15) {
      btnClass = 'btn-hot';
    } else if (count <= 18) {
      btnClass = 'btn-fuego';
    }
    return <button onClick={this.handleClick} className={`btn ${btnClass}`}>Hot Button</button>;
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<HotButton />);
